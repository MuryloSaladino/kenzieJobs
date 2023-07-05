import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().nonempty("Os campos não podem estar vazios"),
    password: z.string().nonempty("Os campos não podem estar vazios"),
});

export type TLoginFormValues = z.infer<typeof loginSchema>