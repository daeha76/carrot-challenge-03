"use server";
import { z } from "zod";

const checkEmail = (email: string) => email.includes("@zod.com");

const passwordRegex = new RegExp(/^(?=.*\d)/);

const formSchema = z.object({
  Email: z
    .string()
    .email()
    .refine(checkEmail, "zod.com 가입자만 로그인 가능합니다."),
  Username: z.string().min(5, "최소 5글자 이상이어야 합니다."),
  Password: z
    .string()
    .min(10, "비밀번호는 최소 10글자 이상이어야 합니다.")
    .regex(passwordRegex, "반드시 1개 이상의 숫자를 포함해야 합니다."),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    Email: formData.get("Email"),
    Username: formData.get("Username"),
    Password: formData.get("Password"),
  };
  const result = formSchema.safeParse(data);
  console.log(result.error?.flatten());
  if (!result.success) {
    return result.error.flatten();
  }
}
