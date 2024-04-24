import './CableHints.css'

const CableHints = ({title}) => {

    return (
        <div className={`hints`}>

            <h1>{title}</h1>

            <div className={`manager-contact-container`}>
                <p className={`manager-contact-left`}>
                    Реализуем силовые кабели с доставкой по Казахстану и странам СНГ.
                    Гарантируем высокое качество продукции и оптимальные цены.
                    Чтобы оформить заказ, свяжитесь с менеджером по телефону <a href="tel:87077049722">+7 707 704 9722</a>,
                    электронной почте <a href="mailto: kazmetalcordkz@mail.ru">kazmetalcordkz@mail.ru</a>, или онлайн на сайте.
                </p>
                <p className={`manager-contact-right`}>
                    В связи с волатильностью отпускных цен, актуальную стоимость уточняйте у менеджера
                </p>
            </div>

        </div>
    )
}

export default CableHints;
