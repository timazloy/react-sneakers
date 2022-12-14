import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from "../../context";


function Card({loading = false,id, onFavorite, img, price, name, onPlus, favorited = false, added = false}) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const {isItemAdded} = React.useContext(AppContext);

    const onClickPlus = () => {
        onPlus({id, img, price, name});
    }

    const onClickFavorite = () => {
        onFavorite({id, img, price, name})
        setIsFavorite(!isFavorite)
    }

    return(



        <div className={styles.card}>
            {
                loading ?  <ContentLoader
                    speed={2}
                    width={150}
                    height={220}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                    <rect x="0" y="107" rx="7" ry="7" width="150" height="15" />
                    <rect x="0" y="126" rx="6" ry="6" width="93" height="15" />
                    <rect x="0" y="162" rx="0" ry="0" width="80" height="24" />
                    <rect x="114" y="155" rx="12" ry="12" width="32" height="32" />
                </ContentLoader> : <>
                    <div className={styles.favorite} onClick={onFavorite}>
                        <img onClick={onClickFavorite} src={isFavorite ?"/img/heart-like.svg" :"/img/heart.svg"}  alt="Unliked"/>
                    </div>

                    <img width={133} height={112} src={img} alt="image"/>
                    <h5>{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price}</b>
                        </div>
                        <img className={styles.plus} onClick={onClickPlus} src={false ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="icon"/>
                    </div>
                </>
            }


        </div>
    );
}

export default Card ;
