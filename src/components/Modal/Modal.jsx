import React, { Component } from 'react'
import { Overlay, ModalWindow } from './Modal.styled'


export class Modal extends Component {
    state = {}

    componentDidMount() {
        window.addEventListener('keydown', this.handlePressESC)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlePressESC)
    };

    handlePressESC = (e) => {
        if (e.code === 'Escape') this.props.closeModal()
    };

    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    };

    render() {
        return (

            < Overlay onClick={this.handleBackDropClick}>
                <ModalWindow>

                    <img src={this.props.showModal} alt="" />
                </ModalWindow>
            </ Overlay>
        )
    };
};

