import './NotFound.css';
import InputMask from 'react-input-mask';
import FileUploader from '../FileUploader/FileUploader.jsx';
import { useState, useEffect } from 'react';

function NotFound() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;

    return (
        <form className={`not-found`}>
            <div className={`not-found-container`}>
                <h2>{isMobile ? 'Закажите бесплатную консультацию' : 'Не нашли, что искали?'}</h2>
                <p>Оставьте свои контактные данные. Наши менеджеры на связи по будням с 9:00 до 18:00, время ответа - до 30 минут.</p>
                <div className={`input-info`}>
                    <input placeholder="Ваше имя" />
                    <InputMask mask="+7 (999) 999 99 99" maskChar="*" placeholder="+7 (***) *** ** **" />
                    <input placeholder="Сообщение" />
                </div>
                <div className={`upload-container`}>
                    <FileUploader />
                    <p>Заявка или карточка компании в формате txt, doc, pdf (максимум 10 файлов)</p>
                </div>

                <div className={`send-request-container`}>
                    <button className={`send-button`}>Отправить заявку</button>
                    <p>Нажимая кнопку, Вы соглашаетесь с <a href="#">Политикой обработки персональных данных</a></p>
                </div>
            </div>
        </form>
    );
}

export default NotFound;
