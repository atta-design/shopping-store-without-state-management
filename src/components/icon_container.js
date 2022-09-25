import React from "react";
import "../App.css";
import "../media.css";
export default function icon_container() {
  return (
    <div>
      <div className="icon-container">
        <i className="fab fa-apple icons">
          <caption className="caption_big">IOS</caption>
        </i>

        <i className="fab fa-android icons">
          <caption className="caption_big">Android</caption>
        </i>
        <div>
          <i className="fab fa-cc-visa icon-bar">
            <caption className="caption">Pay easy</caption>
          </i>
          <i className="fas fa-tag		 icon-bar">
            <caption className="caption">Orginal brands</caption>
          </i>
          <i className="far fa-handshake		icon-bar">
            <caption className="caption">Garanty</caption>
          </i>
        </div>
      </div>
    </div>
  );
}
