import '../../App.css'
import '../../scripts.js'
import aboutCompany from "../../photos/about-company.png";
import aboutBenefitsBodyContainerFirst from "../../photos/about-benefits-body-container-first.png";
import aboutBenefitsBodyContainerSecond from "../../photos/about-benefits-body-container-second.png";
import aboutBenefitsBodyContainerThird from "../../photos/about-benefits-body-container-third.png";
import goTo from "../../photos/goto.png";
import kabeli_kontrolnie from '../../photos/products/КабелиКонтрольные.png'


function MainPage(){
    return(
        <>
            <div className="intro-img">
                <div className="intro-img-divs">
                    <div className="intro-img-first-txt">
                        Оперативные поставки в любой регион СНГ
                    </div>
                    <div className="intro-img-second-txt">
                        Кабельная продукция высокого качества от производителя
                    </div>
                    <div className="catalog-btn">
                        Каталог
                    </div>
                </div>
            </div>
            <div className="about-company m-lr80">
                <div className="about-company-label unit-label">
                    О компании
                </div>
                <div className="about-company-body">
                    <img className="about-company-image" src={aboutCompany} alt={``}/>
                    <div className="about-company-texts">
                        <div className="about-company-text">
                            Всегда в наличии полный ассортимент товаров по оптимальной цене. Опытные специалисты
                            подберут кабельную продукцию и аксессуары под ваши нужды и конкретный проект, а также
                            обеспечат полное информационное сопровождение до момента получения заказа.
                        </div>
                        <div className="about-company-text about-company-text-second">
                            Осуществляем доставку непосредственно на объекты в любой регион СНГ в любое удобное для вас
                            время по предварительной договоренности.
                        </div>
                    </div>
                </div>
            </div>
            <div className="benefits m-lr80">
                <div className="about-benefits-label unit-label">
                    Преимущества работы с нами
                </div>
                <div className="about-benefits-body">
                    <div className="about-benefits-body-container about-benefits-body-container-first">
                        <div className="about-benefits-body-container-text">
                            Вся продукция в наличии и под заказ
                        </div>
                        <img className="about-benefits-body-container-img"
                             src={aboutBenefitsBodyContainerFirst} alt={``}/>
                    </div>
                    <div className="about-benefits-body-container about-benefits-body-container-second">
                        <div className="about-benefits-body-container-text">
                            Круглосуточная доставка в любую точку Казахстана и СНГ
                        </div>
                        <img className="about-benefits-body-container-img"
                             src={aboutBenefitsBodyContainerSecond} alt={``}/>
                    </div>
                    <div className="about-benefits-body-container about-benefits-body-container-third">
                        <div className="about-benefits-body-container-text">
                            Сертифицированные товарные позиции
                        </div>
                        <img className="about-benefits-body-container-img"
                             src={aboutBenefitsBodyContainerThird} alt={``}/>
                    </div>
                </div>
            </div>
            <div className="catalog m-lr80">
                <div className="unit-label">
                    Каталог
                </div>
                <div className="products">

                    <a className="product-container" href="kabeli-silovye"
                       style={{backgroundImage: 'url(src/photos/products/кабели-силовые.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели силовые
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container" href="kabeli-kontrolnie"
                       style={{backgroundImage: 'url(src/photos/products/кабели-контрольные.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели контрольные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container" href="kabeli-montazhnye"
                       style={{backgroundImage: 'url(src/photos/products/кабели-монтажные.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели монтажные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container" href="obmotochnye-provoda"
                       style={{backgroundImage: 'url(src/photos/products/обмоточные-провода.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода обмоточные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container" href="soedinitelnye-provoda"
                       style={{backgroundImage: 'url(src/photos/products/соединительные-провода.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Соединительные провода
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container" href="provoda-silovye"
                       style={{backgroundImage: 'url(src/photos/products/провода-силовые.png)',
                           backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода силовые
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
            <div className="order-section">
                <div className="m-lr80-1 order-section-wrapper">
                    <div className="order-section-main-txt">
                        Закажите бесплатную консультацию
                    </div>
                    <div className="order-section-description-txt">
                        Для получения коммерческого предложения оставьте свои контактные данные. Наши менеджеры на связи
                        по будням с 9:00 до 18:00, время ответа - до 30 минут.
                    </div>
                    <div className="order-section-inputs">
                        <input className="order-input" type="text" placeholder="Ваше имя"/>
                        <input className="order-input" type="text" placeholder="+7 (***) *** ** ** "/>
                        <input className="order-input" type="text" placeholder="Сообщение"/>
                    </div>
                    <div className="order-section-take-file">
                        Прикрепить файл
                    </div>
                    <div className="order-section-submit-info">
                        Заявка или карточка компании в формате txt, doc, pdf (максимум 10 файлов)
                    </div>
                    <div className="order-section-send-btn-group">
                        <div className="order-section-send-btn">
                            Отправить заявку
                        </div>
                        <div className="order-section-send-policy">
                            Нажимая кнопку, Вы соглашаетесь с <a href="#" className="policy-link">Политикой обработки
                            персональных данных</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage