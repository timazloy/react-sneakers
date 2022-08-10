import React from "react";
import './App.css';
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";


function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://62f2672bb1098f15081212c2.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://62f2672bb1098f15081212c2.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62f2672bb1098f15081212c2.mockapi.io/cart', obj);
        setCartItems([...cartItems,  obj])
    }
    const onAddToFavorite = (obj) => {
        axios.post('https://62f2672bb1098f15081212c2.mockapi.io/favorites', obj);
        setFavorites([...cartItems,  obj])
    }

    const onRemoveItem = (id) => {
        console.log(id)
        axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id))

    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

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
                    <Card key={index} name={item.name} price={item.price} img={item.img} onPlus={(obj) => onAddToCart(obj)} onFavorite={(obj) => onAddToFavorite(obj)}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
