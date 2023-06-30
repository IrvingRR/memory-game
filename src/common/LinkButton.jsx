import { LinkButtonElement } from "../styled/common/LinkButton.styles";
/* 
    Reusable component LinkButton with button apperance
    The apperance of the component can be change depending of the properties received
    
    @param {Any} children: Is the content which will be displayed within of the link button 
    @param {String} variant: Allows to change the apperance of the component similar to css famework bootstrap
*/

export const LinkButton = ({ children, variant, ...props }) => {
  return (
    <LinkButtonElement variant={variant} { ...props }>
        { children }
    </LinkButtonElement>
  );
};