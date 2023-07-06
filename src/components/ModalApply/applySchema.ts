import { z } from "zod";

export const applySchema = z.object({
    name: z.string().nonempty("Este campo não pode estar vazio"),
    email: z.string().email("Insira um email válido"),
    linkedin: z.string().nonempty("Este campo não pode estar vazio"),
});

export type TApplyFormValues = z.infer<typeof applySchema>;