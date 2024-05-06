import '../../App.css'
import '../../scripts.js'
import aboutCompany from "../../photos/about-company.png";
import aboutBenefitsBodyContainerFirst from "../../photos/about-benefits-body-container-first.png";
import aboutBenefitsBodyContainerSecond from "../../photos/about-benefits-body-container-second.png";
import aboutBenefitsBodyContainerThird from "../../photos/about-benefits-body-container-third.png";
import goTo from "../../photos/goto.png";
import NotFound from "../../components/NotFound/NotFound";


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
                    <a className="catalog-btn" style={{textDecoration: 'none', color: 'white'}} href="/#catalog">
                        Каталог
                    </a>
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
            <div className="catalog m-lr80" id="catalog">
                <div className="unit-label">
                    Каталог
                </div>
                <div className="products">

                    <a className="product-container kabeli-silovye" href="/kabeli-silovye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели силовые
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container kabeli-kontrolnie" href="/kabeli-kontrolnie">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели контрольные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container kabeli-montazhnye" href="/kabeli-montazhnye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели монтажные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>
                    <a className="product-container kabeli-peredachi-dannyh" href="/kabeli-peredachi-dannyh">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабели передачи данных
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container radiochastotnye-koaksialnye-kabeli" href="/radiochastotnye-koaksialnye-kabeli">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Радиочастотные коаксиальные кабели
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-ustanovochnye" href="/provoda-ustanovochnye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода установочные (монтажные)
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container obmotochnye-provoda" href="/obmotochnye-provoda">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода обмоточные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container soedinitelnye-provoda" href="/soedinitelnye-provoda">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Соединительные провода
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-vodopogruzhnye" href="/provoda-vodopogruzhnye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода водопогружные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-silovye" href="/provoda-silovye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода силовые
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-vozdushnyh-linij-ehlektroperedach" href="/provoda-vozdushnyh-linij-ehlektroperedach">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода воздушных линий электропередач
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-bytovye" href="/provoda-bytovye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода бытовые
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container provoda-bortovye-aviacionnye" href="/provoda-bortovye-aviacionnye">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода бортовые авиационные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container neizolirovannye-provoda" href="/neizolirovannye-provoda">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Провода неизолированные
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container transformatory" href="/transformatory">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Трансформаторы
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container osveshchenie" href="/osveshchenie">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Освещение
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container truby-kabel-kanaly" href="/truby-kabel-kanaly">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Трубы, кабель-каналы
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>

                    <a className="product-container kabelnye-mufty-i-nakonechniki" href="/kabelnye-mufty-i-nakonechniki">
                        <div className="product-background">
                            <div className="product-content">
                                <div className="product-name">
                                    Кабельные муфты и наконечники
                                </div>
                                <img src={goTo} className="goto-img" alt="goto"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <NotFound/>
        </>
    )
}

export default MainPage