import { useEffect } from 'react'
import { Overlay, ModalWindow } from './Modal.styled'
import PropTypes from 'prop-types';


export function Modal({ closeModal, showModal }) {

    useEffect(() => {
        const handlePressESC = (e) => {
            if (e.code === 'Escape') closeModal()
        };

        window.addEventListener('keydown', handlePressESC);
        return () => {
            window.removeEventListener('keydown', handlePressESC)
        };
    }, [closeModal]);




    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

    return (
        < Overlay onClick={handleBackDropClick}>
            <ModalWindow>
                <img src={showModal} alt="" />
            </ModalWindow>
        </ Overlay>
    )
};


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    showModal: PropTypes.string.isRequired,
};

