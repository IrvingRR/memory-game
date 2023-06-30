import { IconButton } from "../common";
import { ModalContainer } from "../styled/components/GameModal.styles";

/* 
    This component allows to render a modal component with a dynamic content
    
    @param {Any} children: Is the dynamic content which will be rendered within of modal component
    @param {Boolean} activated: Is the value that allows to indicate if the modal should be displayed or not depending of the value
    @param {Function} desactuvateModal: Is the function which allows to hidde the modal component
*/

export const GameModal = ({ children, activated, desactivateModal }) => {
  return (
    <ModalContainer activated={activated.toString()}>
        { desactivateModal && <IconButton onClick={desactivateModal} className='modal-close-button' icon={<h2>X</h2>}/> }
        {children}
    </ModalContainer>
  );
};