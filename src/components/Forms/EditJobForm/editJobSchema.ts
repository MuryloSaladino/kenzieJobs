import { z } from "zod";

export const editJobSchema = z.object({
    position: z.string().nonempty("Este campo não podem estar vazio"),
    sallary: z.string().min(0),
    description: z.string().nonempty("Este campo não podem estar vazio"),
});

export type TEditJobFormValues = z.infer<typeof editJobSchema>;