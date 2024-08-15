import { ReactNode } from "react";

interface FormInputProps {
  icon: ReactNode;
  text: string;
  placeholder: string;
  required: boolean;
  name: string;
  errors?: string[];
}
export default function FormInput({
  icon,
  text,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div className="w-full">
      <span className="absolute px-4 py-3 ">{icon}</span>
      <input
        name={name}
        className="w-full h-11 rounded-3xl ring-1
            focus:ring-2 ring-neutral-400 border-none
            ring-offset-2
            placeholder:text-neutral-400 font-semibold
            px-11"
        type={text}
        placeholder={placeholder}
        required={required}
      />
      {errors != null
        ? errors.map((error, index) => (
            <span className="text-red-600" key={index}>
              {error}
            </span>
          ))
        : []}
    </div>
  );
}
