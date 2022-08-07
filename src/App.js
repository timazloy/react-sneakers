import './App.css';
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/1.jpg'},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, img: '/img/sneakers/2.jpg'},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: '/img/sneakers/3.jpg'},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, img: '/img/sneakers/4.jpg'}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex justify-between">
            {arr.map(item => (
                <Card name={item.name} price={item.price} img={item.img}/>
            ))}
            {/*<Index/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
