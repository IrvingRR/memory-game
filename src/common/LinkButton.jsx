import { LinkButtonElement } from "../styled/common/LinkButton.styles";

export const LinkButton = ({ children, variant, ...props }) => {
  return (
    <LinkButtonElement variant={variant} { ...props }>
        { children }
    </LinkButtonElement>
  );
};