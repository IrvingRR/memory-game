import { IconButtonElement } from "../styled/common/IconButton.styles";

export const IconButton = ({ variant, icon, svg, ...props }) => {
  return (
    <IconButtonElement variant={variant} { ...props }>
        { svg && <img src={svg} alt={svg} /> }
        { icon && icon }
    </IconButtonElement>
  );
};
