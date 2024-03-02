import './CableHints.css'

function CableHints() {

    return (
        <div className={`hints`}>

            <h1>Кабели силовые</h1>

            <div className={`manager-contact-container`}>
                <p className={`manager-contact-left`}>
                    Реализуем силовые кабели с доставкой по Казахстану и странам СНГ.
                    Гарантируем высокое качество продукции и оптимальные цены.
                    Чтобы оформить заказ, свяжитесь с менеджером по телефону <a href={`#`}>+7 (727) 310-26-73</a>,
                    электронной почте <a href={`#`}>zakaz@cablelines.kz</a>, или онлайн на сайте.
                </p>
                <p className={`manager-contact-right`}>
                    В связи с волатильностью отпускных цен, актуальную стоимость уточняйте у менеджера
                </p>
            </div>

        </div>
    )
}

export default CableHints;
