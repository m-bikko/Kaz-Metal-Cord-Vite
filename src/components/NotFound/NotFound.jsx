import './NotFound.css';
import InputMask from 'react-input-mask';
import FileUploader from "../FileUploader/FileUploader.jsx";


function NotFound() {
    const handleInput = (e) =>{
        return e.target.value
    }

    return (
        <div className={`not-found`}>
            <div className={`not-found-container`}>
                <h2>Не нашли, что искали?</h2>
                <p>Оставьте свои контактные данные. Наши менеджеры на связи по будням с 9:00 до 18:00, время ответа - до 30 минут.</p>
                <div className={`input-info`}>
                    <input placeholder="Ваше имя"/>
                    <InputMask mask="+7 (999) 999-99-99" maskChar="_" placeholder="+7 (___) ___-__-__" />
                    <input placeholder="Сообщение"/>
                </div>
                <FileUploader/>
            </div>
        </div>
    );
}

export default NotFound;