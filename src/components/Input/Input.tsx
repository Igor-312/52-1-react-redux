import { ErrorMessage, InputContainer, InputElement, Label } from "./styles";
import { InputProps } from "./types";

function Input({
  name,
  type = "text",
  placeholder,
  label,
  id,
  value,
  onChange,
  error
}: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;
