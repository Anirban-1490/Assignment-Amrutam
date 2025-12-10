import { type ComponentProps } from "react";

type ITextfieldBaseProps = {
  label: string;
  labelProps?: ComponentProps<"label">;
};

type ITextFieldProps =
  | {
      textarea?: false;
      inputProps?: ComponentProps<"input">;
    }
  | {
      textarea: true;
      inputProps?: ComponentProps<"textarea">;
    };
export function Textfield({
  textarea = false,
  label,
  labelProps,
  inputProps,
}: ITextFieldProps & ITextfieldBaseProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        {...labelProps}
        className={`font-normal leading-[175%] text-sm text-green-700 ${labelProps?.className}`}
        htmlFor={labelProps?.htmlFor}
      >
        {label}
      </label>
      {textarea ? (
        <TextArea textAreaProps={inputProps as ComponentProps<"textarea">} />
      ) : (
        <Input inputProps={inputProps as ComponentProps<"input">} />
      )}
    </div>
  );
}

const TextArea = ({
  textAreaProps,
}: {
  textAreaProps?: ComponentProps<"textarea">;
}) => {
  return <textarea {...textAreaProps} />;
};
const Input = ({ inputProps }: { inputProps?: ComponentProps<"input"> }) => {
  return <input {...inputProps} />;
};
