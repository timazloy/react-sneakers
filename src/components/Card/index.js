import React from 'react'
import styles from './Card.module.scss'


function Card({id, onFavorite, img, price, name, onPlus, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, img, price, name});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({id, img, price, name})
        setIsFavorite(!isFavorite)
    }

    return(
        <div className={styles.card}>
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
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="icon"/>
            </div>
        </div>
    );
}

export default Card ;
