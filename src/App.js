
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стол первый',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'Без названия (1).jpeg'
        },
        {
          id: 2,
          title: 'Стол ',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'Без названия (2).jpeg'
        },
        {
          id: 3,
          title: 'Стул',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'Без названия (3).jpeg'
        },
        {
          id: 4,
          title: 'Деревянный стул',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'Без названия (4).jpeg'
        },
        {
          id: 5,
          title: 'Диван',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'Без названия.jpeg'
        },
        {
          id: 6,
          title: 'Лампа',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'images (1).jpeg'
        },
        {
          id: 7,
          title: 'Стул белый',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'images (2).jpeg'
        },
        {
          id: 8,
          title: 'Красный стол',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'images (3).jpeg'
        },
        {
          id: 9,
          title: 'Коричневый Диван',
          desc: 'lorem dfghj qwerty wertyu dfgh cvbn',
          category: 'chairs',
          price: '49.99',
          img: 'images (4).jpeg'
        },
     
      ]
    }


  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        
        <Footer />
      </div>
    );
  }
}

export default App;
