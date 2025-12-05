import { z } from "zod";

const Max_INPUT_TOKENS = 1000;

export const CreateChatSchema = z.object({
  message: z.string().max(Max_INPUT_TOKENS)
})