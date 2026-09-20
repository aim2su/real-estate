"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(9, "Введите телефон"),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  title?: string;
  className?: string;
}

export function LeadForm({ title = "Записаться на просмотр", className }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("lead:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={cn("rounded-2xl border border-primary/15 bg-white p-8 text-center", className)}>
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-primary-dark">Заявка отправлена!</h3>
        <p className="mt-2 text-sm text-primary-dark/70">
          Мы свяжемся с вами в течение 15 минут.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("rounded-2xl border border-primary/15 bg-white p-8 shadow-sm", className)}
    >
      <h3 className="text-2xl font-semibold text-primary-dark">{title}</h3>
      <p className="mt-2 text-sm text-primary-dark/60">
        Оставьте заявку — перезвоним в течение 15 минут.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-primary-dark outline-none focus:border-primary transition"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="+992 __ ___ ____"
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-primary-dark outline-none focus:border-primary transition"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <textarea
            {...register("comment")}
            placeholder="Комментарий (необязательно)"
            rows={3}
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-primary-dark outline-none focus:border-primary transition resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={!isValid || isSubmitting}
          className={cn(
            "w-full transition-all duration-200",
            !isValid && "bg-gray-200 text-gray-400 shadow-none hover:bg-gray-200 cursor-not-allowed",
            isValid && !isSubmitting && "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl"
          )}
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
      </div>
    </form>
  );
}
