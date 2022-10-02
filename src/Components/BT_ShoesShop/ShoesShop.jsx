// rcc
import React, { Component } from 'react'
import dataShoes from './dataShoes.json'
import DSShoes from './DSShoes'
import ShoesDetail from './ShoesDetail'

export default class ShoesShop extends Component {
  state = {
    shoes: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  handleShoeDefault = (shoes) => {
    this.setState({
      shoes: shoes,
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Thông tin sản phẩm</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ShoesDetail shoes={this.state.shoes} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2 mt-3">
            <p>Home</p>
            <p>Shop</p>
          </div>
          <div className="col-md-10">
            <div className="row">
              {dataShoes.map((value) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 mt-3" key={value.id}>
                    <DSShoes product={value} handleShoeDefault={this.handleShoeDefault}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
