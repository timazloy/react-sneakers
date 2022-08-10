function Drawer({onClose, onRemove, items =[]}) {
    return(
        <div  className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between  mb-30">
                    Корзина
                    <img className="cu-p removeBtn" src="/img/btn-remove.svg" onClick={onClose} alt="Remove"/>
                </h2>

                {
                    items.length > 0 ? <div className="items">
                        <div>
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{backgroundImage: `url(${obj.img})`}} className="cartItemImg">

                                    </div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                                </div>
                            ))}
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого</span>
                                        <div></div>
                                        <b>21 498 руб. </b>
                                    </li>
                                    <li>
                                        <span>Налог 5%: </span>
                                        <div></div>
                                        <b>1074 руб. </b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформить заказ
                                    <img src="/img/button-arrow.svg" alt="Arrow"/>
                                </button>
                            </div>
                        </div>

                    </div>  : <div className="basket-empty">
                        <img className="basket-empty__image" src="./img/basket-empty.jpg" alt="image"/>
                        <div className="basket-empty__title">Корзина пустая</div>
                        <div className="basket-empty__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</div>
                        <button onClick={onClose} className="basket-empty__button greenButton">
                            <img src="/img/arrow-left.svg" alt="Arrow"/>
                            <span>Вернуться назад</span>
                        </button>
                    </div>
                }






            </div>
        </div>
    );
}

export default Drawer;
