import React from "react";
import './App.css';
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://62f2672bb1098f15081212c2.mockapi.io/items').then((res) => {
            return res.json();
        }).then((json) => {
            setItems(json)
        })
    }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex justify-between flex-wrap">
            {items.map(item => (
                <Card name={item.name} price={item.price} img={item.img} onPlus={() => console.log('Нажали плюс')} onFavorite={() => console.log('Добавили в закладки')}/>
            ))}
            {/*<Index/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
