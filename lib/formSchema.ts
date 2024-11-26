import { z } from "zod";
const MAX_MB = 5
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024

const ACCTEP_FILE_TYPES = ["image/png", "image/webp","image/jpeg", "image/gif"]
export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください" }),
  subject: z.string().min(2, { message: "主題は2文字以上で入力してください" }),
  email: z
    .string()
    .email({ message: "適切なメールアドレスを入力してください" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください" })
    .max(160, { message: "本文は160文字以内で入力してください" }),
  file: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "ファイル画像が必要です") // ファイルの数
    .refine((files) => files?.[0].size <= MAX_FILE_SIZE, `画像サイズは${MAX_MB}MBまでです。`) // 5MB
    .refine((files) => ACCTEP_FILE_TYPES.includes(files?.[0].type), ".jpeg, .png, webp, .gifのファイルのみ利用できます。") // 画像形式
});
