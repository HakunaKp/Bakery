import React, { useState } from 'react';
import Title from './Title';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import './styles.css';

function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="Gallery">
            <Title/>
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Gallery;