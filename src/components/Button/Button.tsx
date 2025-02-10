import { ButtonProps } from "./types";
import { MainButton } from "./styles";
// import {Event} from 'react';

// interface ButtonProps {
//   name?: string,
//   type: 'submit' | 'button' | 'reset',
//   onClick: () => void
// }

function Button({
  name = "SEND",
  type = "button",
  onClick,
  disabled = false,
  isRed = false,
}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled} $isRed={isRed}>
      {name}
    </MainButton>
  );
}
export default Button;
