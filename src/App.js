import React from "react";
import './App.css';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from './pages/Home'
import { BrowserRouter as Routes, Route, Router, Link} from "react-router-dom";
import Favorites from "./pages/Favorites";



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

    <Router>
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
            <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </Router>




    </div>
  );
}

export default App;
