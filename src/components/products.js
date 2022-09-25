import React, { useState } from "react";
import "../App.css";
import { Modal, Button } from "react-bootstrap";
import "../media.css";
import StarRatingComponent from "react-star-rating-component";

function Products(props) {
  const [show, setShow] = useState(false);

  const { product, onadd } = props;
  const handleshow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="box">
        <div onClick={handleshow}>
          <img className="productIMG" src={product.img} alt={product.name} />
          <div className="text-left ml-3">
            <h5 className="mt-3">{product.name} </h5>
            <h2>${product.price}</h2>
          </div>
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => (
              <span>
                <i class="fa fa-star" aria-hidden="true"></i>
              </span>
            )}
            starCount={5}
            value={3}
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Color:{product.color}</p>
          <p>Connect:{product.connect}</p>
          <p>Weight:{product.weight}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="success"
            onClick={() => onadd(product)}
            onClickCapture={handleClose}
          >
            Add to Basket{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Products;
