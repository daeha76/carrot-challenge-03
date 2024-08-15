"use server";

import { error } from "console";

export async function handleForm(prevState: any, formData: FormData) {
  const inputPassword = formData.get("Password");
  console.log(inputPassword);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (inputPassword === "12345")
    return {
      errors: [],
    };
  else {
    return {
      errors: ["wrong password"],
    };
  }
}
