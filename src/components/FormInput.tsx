import { ComponentProps } from "react";

export default function FormInput({
  inputProps,
}: {
  inputProps: ComponentProps<"input">;
}) {
  return <input className="form-input" type="text" {...inputProps} />;
}
