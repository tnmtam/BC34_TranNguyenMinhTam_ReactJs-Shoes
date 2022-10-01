import React, { Component } from "react";

export default class DanhSachShoes extends Component {
  render() {
    let { dataShoesProps, hanldeChiTiet } = this.props;
    return (
      <div className="row g-2">
        {dataShoesProps.map((shoes, index) => {
          return (
            <div key={index} className="col-4 border">
              <img
                className="img-fluid"
                style={{ height: "300px" }}
                src={shoes.image}
              />
              <h3>{shoes.name}</h3>
              <h3>{shoes.price.toLocaleString()}$</h3>
              <button
                
                className="btn btn-success mb-2"
                onClick={() => hanldeChiTiet(shoes)}
                data-toggle="modal" data-target="#exampleModal"
              >
                Xem chi tiết
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
