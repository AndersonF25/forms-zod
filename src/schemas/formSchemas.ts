import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "O número mínimo de caracteres é 3."),
    lastname: z.string().min(3, "O número mínimo de caracteres é 3."),
    gender: z.string().refine((field) => field !== "select", {
      message: "Selecione um gênero.",
    }),
    email: z
      .string()
      .min(1, "O campo é obrigatório")
      .email("Utilize um email válido."),
    password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres."),
    confirmPassword: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres."),
    agree: z.boolean().refine((field) => field !== false, {
      message: "Você precisa aceitar os termos de uso.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;
