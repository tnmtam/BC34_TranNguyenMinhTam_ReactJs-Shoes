import React, { Component } from "react";
import dataShoes from './dataShoes.json';
import SanPham from "./SanPham";


export default class DanhSachShoes extends Component {
    constructor(props){
        super(props);
        this.state= {
            sanPhamChiTiet: dataShoes[0]
        }
    }

    renderSanPham = () => {
        return dataShoes.map((shoes, index) => {
            return (
               <SanPham key={index} shoes={shoes} xemChiTiet={this.xemChiTiet}/> 
            )
        })
    }

    xemChiTiet = (sanPham) => {
        this.setState({
            sanPhamChiTiet:sanPham
        })
    }

  render() {
    let {sanPhamChiTiet} = this.state;
    return (
      <div className="container">
        <div className="row">
            {this.renderSanPham()}
        </div>
        <hr />
        <div className="row">
            <div className="col-6 text-left">
                <h3>{sanPhamChiTiet.name}</h3>
                <img src={sanPhamChiTiet.image} width={250} height={300} />
            </div>
            <div className="col-6">
                <h3>Thông tin chi tiết</h3>
                <table className="table">
                    <tr>
                        <th>Mô tả</th>
                        <th>{sanPhamChiTiet.description}</th>
                    </tr>
                    <tr>
                        <th>Điểm nổi bật</th>
                        <th>{sanPhamChiTiet.shortDescription}</th>
                    </tr>
                    <tr>
                        <th>Giá</th>
                        <th>{sanPhamChiTiet.price}</th>
                    </tr>
                    <tr>
                        <th>Số lượng</th>
                        <th>{sanPhamChiTiet.quantity}</th>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    );
  }
}
