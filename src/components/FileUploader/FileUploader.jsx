import React, { useRef, useState } from 'react';
import './FileUploader.css'
import remove from '../Shared/image/remove.png'

function FileUploader() {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = () => {
        const files = fileInputRef.current.files;
        const filesArray = Array.from(files);
        if(selectedFiles.length < 10){
            setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
        }
    };

    const removeFile = (file) => {
        const updatedFiles = selectedFiles.filter((f) => f !== file);
        setSelectedFiles(updatedFiles);
    };

    return (
        <div className={`file-uploader`}>
            <input
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button className={`add-file-button`} onClick={() => fileInputRef.current.click()}>Прикрепить файлы</button>

            <ul>
                {selectedFiles.map((file, index) => (
                    <li key={index}>
                        {/*https://cdn-icons-png.flaticon.com/512/3405/3405244.png*/}
                        <button className={`remove-file-button`} onClick={() => removeFile(file)}><img alt={``} src={remove}/></button>
                        {' '}{file.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileUploader;
