import React, { useRef, useState, useEffect } from 'react';
import './FileUploader.css';
import removeIcon from '../../photos/image/remove.png';

const FileUploader = ({ updateSelectedFiles, clearFiles, setClearFiles }) => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const maxFileCount = 10;

    const handleFileChange = () => {
        const files = fileInputRef.current.files;
        const filesArray = Array.from(files);

        if (selectedFiles.length + filesArray.length <= maxFileCount) {
            setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
            updateSelectedFiles([...selectedFiles, ...filesArray]);
        } else {
            console.error('Выбрано слишком много файлов');
        }
    };

    const removeFile = (file) => {
        const updatedFiles = selectedFiles.filter((f) => f !== file);
        setSelectedFiles(updatedFiles);
        updateSelectedFiles(updatedFiles); // Обновляем выбранные файлы в родительском компоненте
    };

    useEffect(() => {
        if (clearFiles) {
            setSelectedFiles([]); // Clear selected files
            setClearFiles(false); // Reset the clearFiles state
        }
    }, [clearFiles, setClearFiles]);

    return (
        <div className="file-uploader">
            <input
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
                name={`files`}
            />
            <button className="add-file-button" onClick={() => fileInputRef.current.click()}>
                Прикрепить файлы
            </button>

            <ul>
                {selectedFiles.map((file, index) => (
                    <li key={index}>
                        <button className="remove-file-button" onClick={() => removeFile(file)}>
                            <img alt="" src={removeIcon} />
                        </button>
                        {' '}{file.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileUploader;
