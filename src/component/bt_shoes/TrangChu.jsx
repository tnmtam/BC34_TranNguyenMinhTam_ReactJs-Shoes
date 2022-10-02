import React, { Component } from 'react';
import DanhSachShoes from './DanhSachShoes';


export default class TrangChu extends Component {
    render() {
        return (
        <div className='container'>
            <h2 className='text-center text-success'>Shoes Shop</h2>
            <DanhSachShoes />       
        </div>
        )
  }
}
