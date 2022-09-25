import "./App.css";
import "./media.css";
import Header from "./components/header";
import Main from "./components/main";
import Basket from "./components/basket";
import data from "./components/data";
import Carousels from "./components/Carousel";
import React, { useState } from "react";
import Footer from "./components/footer";
import IconContainer from "./components/icon_container";
import Colapse from "./components/colapse";
function App() {
  const { popularProducts } = data;
  const { products } = data;

  const [carditem, setcarditem] = useState([]);

  const onadd = (product) => {
    const exist = carditem.find((x) => x.id === product.id);
    if (exist) {
      setcarditem(
        carditem.map((x) =>
          x.id === product.id ? { ...exist, qyt: exist.qyt + 1 } : x
        )
      );
    } else {
      setcarditem([...carditem, { ...product, qyt: 1 }]);
    }
  };

  const onremove = (product) => {
    const exist = carditem.find((x) => x.id === product.id);
    if (exist.qyt === 1) {
      setcarditem(carditem.filter((x) => x.id !== product.id));
    } else {
      setcarditem(
        carditem.map((x) =>
          x.id === product.id ? { ...exist, qyt: exist.qyt - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header carditemnum={carditem.length} />
      <Carousels />

      <IconContainer />
      <Main onadd={onadd} products={products} popular={popularProducts} />

      <Colapse />

      <Basket onadd={onadd} onremove={onremove} carditem={carditem} />
      <Footer />
    </div>
  );
}

export default App;
