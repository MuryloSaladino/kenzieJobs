import { z } from "zod";

export const createJobSchema = z.object({
    position: z.string().nonempty("Os campos não podem estar vazios"),
    sallary: z.string().min(0),
    description: z.string().nonempty("Os campos não podem estar vazios"),
});

export type TCreateJobFormValues = z.infer<typeof createJobSchema>;