import Card from "../components/Card";
import React from "react";
import AppContext from "../context";




function Home({isLoading,items,searchValue,setSearchValue,onChangeSearchInput,onAddToFavorite,onAddToCart}) {
    const renderItems = () => {
        const filtredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(10)] : filtredItems)
            .map((item, index) => (
                <Card key={index}
                    // name={item.name}
                    // price={item.price}
                    // img={item.img}
                      onPlus={(obj) => onAddToCart(obj)}
                      onFavorite={(obj) => onAddToFavorite(obj)}
                      loading={isLoading}
                      {...item}
                />
            ))

    }
    return(
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue}/>
                    {searchValue && <img onClick={() => setSearchValue('')} className="removeBtn clearInput" src="/img/btn-remove.svg" alt="Remove"/>}
                </div>
            </div>

            <div className="d-flex justify-between flex-wrap">
                {renderItems()}
            </div>
        </div>
        )
}

export default Home;
