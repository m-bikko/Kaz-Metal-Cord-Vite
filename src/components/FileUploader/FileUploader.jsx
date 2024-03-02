import React, { useRef } from 'react';

function FileUploader() {
    const fileInputRef = useRef(null);

    const handleFileChange = () => {
        const selectedFile = fileInputRef.current.files[0];
        console.log('Selected File:', selectedFile);
        // Добавьте здесь логику для обработки выбранного файла
    };

    return (
        <div>
            <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button onClick={() => fileInputRef.current.click()}>Прикрепить файл</button>
        </div>
    );
}

export default FileUploader;
