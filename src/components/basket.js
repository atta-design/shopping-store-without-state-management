import React, { useState } from "react";
import "../App.css";
import { Modal } from "react-bootstrap";
import "../media.css";
function Basket(props) {
  const [show, setShow] = useState(false);

  const openshow = () => {
    setShow(true);
  };
  const closeshow = () => {
    setShow(false);
  };
  const { carditem, onadd, onremove } = props;
  const itemsprice = carditem.reduce((a, c) => a + c.price * c.qyt, 0);
  const taxprice = itemsprice * 0.14;
  const shippingprice = itemsprice > 2000 ? 50 : 0;
  const totalprice = itemsprice + taxprice + shippingprice;
  return (
    <div className="basket" id="id1">
      <div className="basket-title">
        <h3>basket</h3>
      </div>
      <div>
        {carditem.length === 0 && (
          <div>
            <h3> Basket is empty! </h3>
            <p>You can add what you want to your basket</p>
          </div>
        )}
      </div>
      <div className="mt-3 ml-5 mr-5">
        {carditem.map((item) => (
          <div key={item.id} className="row mt-4">
            <div className="">{item.name}</div>
            <span>&nbsp;&nbsp;</span>
            <button
              onClick={() => onadd(item)}
              className="btn btn-success ml-2 mr-2"
            >
              +
            </button>
            <span>&nbsp;</span>
            <button
              onClick={() => onremove(item)}
              className="btn btn-danger mr-2"
            >
              -
            </button>

            <div className="price">
              {item.qyt} * ${item.price.toFixed(2)}
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        ))}
      </div>
      {carditem.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="d-flex flex-column text-left">
              <ul>
                <li>
                  <p> items price: ${itemsprice.toFixed(2)}</p>
                </li>

                <li>
                  {" "}
                  <p> tax price: ${taxprice.toFixed(2)}</p>
                </li>

                <li>
                  {" "}
                  <p> shipping price: ${shippingprice.toFixed(2)}</p>
                </li>

                <li>
                  {" "}
                  <p>
                    {" "}
                    total price <strong>${totalprice.toFixed(2)}</strong>{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <button className="btn btn-success  checkout-btn " onClick={openshow}>
        Check Out
      </button>
      <Modal show={show} onHide={closeshow} size="lg">
        <Modal.Body>
          {totalprice === 0 ? (
            <h2 className="alert alert-info ">YOUR BASKET IS EMPTY</h2>
          ) : (
            <h2 className="alert alert-success">THE BUY COMPLATED THANKS</h2>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Basket;
