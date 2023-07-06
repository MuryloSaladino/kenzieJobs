import { z } from "zod";

export const applySchema = z.object({
    name: z.string().nonempty("Este campo não podem estar vazio"),
    email: z.string().email("Insira um email válido").nonempty("Este campo não podem estar vazio"),
    linkedin: z.string().nonempty("Este campo não podem estar vazio"),
});

export type TApplyFormValues = z.infer<typeof applySchema>;