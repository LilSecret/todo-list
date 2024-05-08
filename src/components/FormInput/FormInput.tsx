import { ComponentProps } from "react";
import "./form-input.css";

export default function FormInput({
  inputProps,
}: {
  inputProps: ComponentProps<"input">;
}) {
  return <input className="form-input" type="text" {...inputProps} />;
}
