import React from "react";
import './App.css';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
        axios.get('https://62f2672bb1098f15081212c2.mockapi.io/favorites').then(res => {
            setFavorites(res.data)
        })
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        } else {
            axios.post('https://62f2672bb1098f15081212c2.mockapi.io/cart', obj);
            setCartItems((prev) =>[...prev,  obj])
        }
    }
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/favorites/${obj.id}`)
                setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
            } else {
                const { data } = await axios.post('https://62f2672bb1098f15081212c2.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev,  data])
            }
        } catch (error) {
            alert("Не удалось добавить в фавориты")
        }


    }

    const onRemoveItem = (id) => {
        axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id))

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
            <Route exact path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}/>
            <Route exact path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>
        </Routes>
    </Router>






    </div>
  );
}

export default App;
