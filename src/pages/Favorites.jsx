import React from "react";
import Card from "../components/Card";
import AppContext from "./context";


function Favorites({ onAddToFavorite}) {
    const {favorites} = React.useContext(AppContext);


    return(
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex justify-between flex-wrap">
                {favorites
                    .map((item, index) => (
                        <Card key={index}
                              // name={item.name}
                              // price={item.price}
                              // img={item.img}
                              favorited={true}
                              onFavorite={onAddToFavorite}
                              {...item}
                        />
                    ))
                }
            </div>
        </div>
        )
}

export default Favorites;