import { z } from "zod";

export const registerSchema = z.object({
    name:z.string().nonempty("Os campos não podem estar vazios"),
    email:z.string().nonempty("Os campos não podem estar vazios").email("Insira um email valido"),
    password:z.string().nonempty("Os campos não podem estar vazios").min(8, "O minimo é 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "Pelo menos um numero")
    .regex(/(?=.*?[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/, { message: "Pelo menos um caracter especial" }),
    confirm:z.string().nonempty("Os campos não podem estar vazios"),
}).refine(({password, confirm})=> password===confirm, {
    message:"As senhas não correspondem",
    path:["confirm"],
})

export type TRegisterFormValues = z.infer<typeof registerSchema>;