import Card from "../components/Card";


function Home({items,cartItems,searchValue,setSearchValue,onChangeSearchInput,onAddToFavorite,onAddToCart}) {
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
                {items
                    .filter((item) => item.name.toLowerCase().includes(searchValue))
                    .map((item, index) => (
                        <Card key={index}
                              // name={item.name}
                              // price={item.price}
                              // img={item.img}
                              onPlus={(obj) => onAddToCart(obj)}
                              onFavorite={(obj) => onAddToFavorite(obj)}
                              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                              loading={false}
                              {...item}
                        />
                    ))
                }
            </div>
        </div>
        )
}

export default Home;
