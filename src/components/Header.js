import {Link, NavLink} from "react-router-dom";


function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>

            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img src="/img/card.svg" alt="basket"/>
                    <span>1205 руб.</span>
                </li>

                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <Link to="/favorites">
                        <img src="/img/favorite.svg" alt="favorites"/>
                    </Link>
                </li>


                <li>
                    <img src="/img/user.svg" alt="User"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;
