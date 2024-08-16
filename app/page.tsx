"use client";
import FormButton from "@/components/Form-btn";
import FormInput from "@/components/form-input";
import { MailIcon, UserIcon, LockIcon } from "@/components/icons";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  console.log(state);
  return (
    <div
      className="flex flex-col 
        items-center px-48 py-20 gap-12"
    >
      <div className="my-auto">
        <span className="text-6xl">🪭</span>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="Email"
          icon={<MailIcon />}
          text="text"
          placeholder="Email"
          required
          errors={state?.fieldErrors.Email}
        />
        <FormInput
          name="Username"
          icon={<UserIcon />}
          text="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.Username}
        />
        <FormInput
          name="Password"
          icon={<LockIcon />}
          text="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.Password}
        />
        <FormButton text="Log in" />
        {state || state === null ? (
          <></>
        ) : (
          <div
            className="bg-green-600 h-11 
              rounded-xl px-12 items-center
              justify-items-center
              font-semibold
              "
          >
            Welcome back!
          </div>
        )}
      </form>
    </div>
  );
}
