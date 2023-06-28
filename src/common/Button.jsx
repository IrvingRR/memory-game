import { ButtonElement } from "../styled/common/Button.styles";

export const Button = ({ children, variant, ...props }) => {
  return (
    <ButtonElement variant={variant} { ...props }>
        { children }
    </ButtonElement>
  );
};