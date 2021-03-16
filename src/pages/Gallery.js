import React, { useState } from 'react';
import Title from '../components/Gallery/Title';
import UploadForm from '../components/Gallery/UploadForm';
import ImageGrid from '../components/Gallery/ImageGrid';
import Modal from '../components/Gallery/Modal';

function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="Gallery">
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Gallery;