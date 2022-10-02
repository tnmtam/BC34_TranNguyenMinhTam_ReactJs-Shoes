import React, { Component } from 'react'

export default class DSShoes extends Component {
  render() {
    console.log(this.props.product)
    const { product, handleShoeDefault } = this.props
    return (
      <div className="card">
        <img src={product.image} />
        <div className="card-body text-left">
          <p>{product.name}</p>
          <h4>{product.price} $</h4>
          <div className="row d-flex justify-content-center">
            <button
              className="btn btn-dark"
            >
              Add to carts <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
            <button className='btn btn-success ml-3' data-toggle="modal" data-target="#exampleModal"
            onClick={() => handleShoeDefault(product)}>Xem chi tiết</button>
          </div>
        </div>
      </div>
    )
  }
}
