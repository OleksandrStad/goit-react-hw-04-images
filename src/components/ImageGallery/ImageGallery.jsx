import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'


export const ImageGallery = ({ images, openModal }) => {

    return (
        < ImageGalleryList >
            {images.map((el) => {
                return (
                    < ImageGalleryItem images={el} key={el.id} openModal={openModal} />
                );
            })}
        </ImageGalleryList >
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
};