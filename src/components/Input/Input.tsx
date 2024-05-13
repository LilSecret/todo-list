import { ComponentProps } from "react";
import "./input.css";

export default function Input({
  inputProps,
}: {
  inputProps: ComponentProps<"input">;
}) {
  return <input className="input" type="text" {...inputProps} />;
}
