import { IconButton } from "../common";
import { ModalContainer } from "../styled/components/GameModal.styles";

export const GameModal = ({ children, activated }) => {
  return (
    <ModalContainer activated={activated.toString()}>
        <IconButton className='modal-close-button' icon={<h2>X</h2>}/>
        {children}
    </ModalContainer>
  );
};