import { IconButtonElement } from "../styled/common/IconButton.styles";

/* 
    Reusable component IconButton
    The apperance of the component can be change depending of the properties received
    
    @param {Any} icon: Is the icon which will be displayed within of the icon button 
    @param {String} variant: Allows to change the apperance of the component similar to css famework bootstrap
    @param {SVGElement} svg: Is the icon of svg type which will be displayed within of the icon button using a img tag
*/

export const IconButton = ({ variant, icon, svg, ...props }) => {
  return (
    <IconButtonElement variant={variant} { ...props }>
        { svg && <img src={svg} alt={svg} /> }
        { icon && icon }
    </IconButtonElement>
  );
};
