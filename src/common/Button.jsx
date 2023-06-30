import { ButtonElement } from "../styled/common/Button.styles";

/* 
    Reusable component Button 
    The apperance of the component can be change depending of the properties received
    
    @param {Any} children: Is the content which will be displayed within of the button 
    @param {String} variant: Allow to change the apperance of the component similar to css famework bootstrap
*/

export const Button = ({ children, variant, ...props }) => {
  return (
    <ButtonElement variant={variant} { ...props }>
        { children }
    </ButtonElement>
  );
};