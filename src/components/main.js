import React, { useState } from "react";
import "../App.css";
import Product from "./products";
import "../media.css";

function Main(props) {
  const { products, onadd, popular } = props;
  const [toggle, setToggle] = useState(true);

  return (
    <div className=" main">
      {toggle ? (
        <div>
          {" "}
          <h2 className="mt-5">MOST POPULARS</h2>{" "}
          <div className="row popular">
            {popular.map((popular) => (
              <Product key={popular.id} product={popular} onadd={onadd} />
            ))}
          </div>{" "}
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setToggle(!toggle)}
          >
            see more
          </button>
        </div>
      ) : (
        <div className="row ">
          {products.map((product) => (
            <Product key={product.id} product={product} onadd={onadd} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
