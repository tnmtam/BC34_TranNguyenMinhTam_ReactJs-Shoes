import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { stateShoes } = this.props;

    return (
      <div className="col-12 row pt-4">
        <div className="col-5">
          <h2>{stateShoes.name}</h2>

          <img
            className="img-fluid"
            style={{ height: "300px" }}
            src={stateShoes.image}
          />
        </div>
        <div className="col-6">
          <h2>Thông tin sản phẩm</h2>
          <table className="table text-left">
            <tbody>
              <tr>
                <td>Mô Tả Sản Phẩm</td>
                <td>{stateShoes.description}</td>
              </tr>
              <tr>
                <td>Điểm nổi bật</td>
                <td>{stateShoes.shortDescription}</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>{stateShoes.price}$</td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>{stateShoes.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
