import { useState, useEffect } from "react";
import { getImages } from '../services/getImages';
import { InfinitySpin } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button'
import { Modal } from './Modal/Modal'


export function App() {
  const [images, setImages] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [urlPreviewImage, setUrlPreviewImage] = useState('');

  useEffect(() => {

    if (nameSearch) {
      setIsLoading(true);

      getImages(nameSearch, page)
        .then(res => res.json())
        .then((images) => setImages(state => ([...state, ...images.hits])))
        .catch(error => console.log(error))
        .finally(() => {
          setIsLoading(false)
        })
    };

  }, [nameSearch, page]);


  const onLoadMore = () => {
    setPage(state => state + 1)
  };

  const handleChangeSubmit = nameSearch => {
    setNameSearch(nameSearch)
    setPage(1)
    setImages([])
  };

  const openModal = url => {
    setUrlPreviewImage(url);
  };

  const closeModal = () => {
    setUrlPreviewImage('');
  };


  return (

    <>
      <Searchbar onSubmit={handleChangeSubmit} />

      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InfinitySpin width="400" color="#4c2ef7" />
        </div>
      )}

      < ImageGallery images={images} openModal={openModal} />

      {(images.length !== 0 && !((images.length / 12) % 1)) &&
        (<BtnLoadMore handlerClick={onLoadMore} />)
      }

      {urlPreviewImage && <Modal closeModal={closeModal} showModal={urlPreviewImage} />}

    </>
  );

};
