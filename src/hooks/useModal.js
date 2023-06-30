import { useState } from 'react';

/* 
    This hook allows to handle the functionality of a modal component
*/

export const useModal = (initialState = false) => {

    const [isModalActivated, setIsModalActivated] = useState(initialState);

    // This function allows to active the modal to show it ih the application
    const activateModal = () => setIsModalActivated(true);

    // This function allows to desactive the modal to hidde it in the application
    const desactivateModal = () => setIsModalActivated(false);

    // This function allows to desactivate and activate the modal using the same element as a toggle
    const toggleModal = () => setIsModalActivated(!isModalActivated);

    return {
        isModalActivated,
        activateModal,
        desactivateModal,
        toggleModal
    };
};