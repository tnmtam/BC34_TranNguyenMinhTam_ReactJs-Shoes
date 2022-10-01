import React, { Component } from 'react';
import SanPham from './SanPham';
import dataShoes from './dataShoes.json';
import DanhSachShoes from './DanhSachShoes';

export default class TrangChu extends Component {
    state = {
        stateShoes: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
          },
      }

    hanldeChiTiet = (shoes) => {
        this.setState({
            stateShoes: shoes
        })
    }



  render() {

    let { stateShoes } = this.state;

    return (
      <div className='container'>
        <DanhSachShoes dataShoesProps={dataShoes} hanldeChiTiet={this.hanldeChiTiet}  />
        
        <SanPham stateShoes={stateShoes}/>
      </div>
    )
  }
}
