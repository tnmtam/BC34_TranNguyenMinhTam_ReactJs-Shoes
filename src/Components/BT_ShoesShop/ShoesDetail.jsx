import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    const { shoes } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-6 text-left">
            <h3>{shoes.name}</h3>
            <img src={shoes.image} width={250} height={300} />
          </div>
          <div className="col-6">
            <table className="table">
              <tr>
                <th className="border-right">Mô tả</th>
                <td>{shoes.description}</td>
              </tr>
              <tr>
                <th className="border-right">Điểm nổi bật</th>
                <td>{shoes.shortDescription}</td>
              </tr>
              <tr>
                <th className="border-right">Giá</th>
                <td>{shoes.price} $</td>
              </tr>
              <tr>
                <th className="border-right">Số lượng</th>
                <td>{shoes.quantity}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
