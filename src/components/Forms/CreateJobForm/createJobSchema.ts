import { z } from "zod";

export const createJobSchema = z.object({
    position: z.string().nonempty("Este campo não podem estar vazio"),
    sallary: z.string().min(0),
    description: z.string().nonempty("Este campo não podem estar vazio"),
});

export type TCreateJobFormValues = z.infer<typeof createJobSchema>;