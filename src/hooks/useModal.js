import { useState } from 'react';

export const useModal = (initialState = false) => {

    const [isModalActivated, setIsModalActivated] = useState(initialState);

    const activateModal = () => setIsModalActivated(true);

    const desactivateModal = () => setIsModalActivated(false);

    const toggleModal = () => setIsModalActivated(!isModalActivated);

    return {
        isModalActivated,
        activateModal,
        desactivateModal,
        toggleModal
    };
};