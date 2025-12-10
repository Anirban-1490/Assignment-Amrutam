import { type ComponentProps, type PropsWithChildren } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  varient?: "default" | "outlined";
}

export function Button({
  children,
  varient = "default",
  ...props
}: IButtonProps & PropsWithChildren) {
  const varientStyled =
    varient == "default"
      ? "bg-secondary"
      : " border border-secondary bg-transparent";

  return (
    <button
      {...props}
      className={`${varientStyled} ${props.className} cursor-pointer h-fit`}
    >
      {children}
    </button>
  );
}
