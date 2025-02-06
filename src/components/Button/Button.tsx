import { ButtonProps } from "./types";
import { MainButton } from "./styles";

// interface ButtonProps {
//   name?: string,
//   type: 'submit' | 'button' | 'reset',
//   onClick: () => void
// }

function Button({ name = "SEND", type='button', onClick, disabled = false }: ButtonProps) {

  return (
    <MainButton type={type} onClick={onClick} disabled={disabled}>
      {name}
    </MainButton>
  );
}
export default Button;