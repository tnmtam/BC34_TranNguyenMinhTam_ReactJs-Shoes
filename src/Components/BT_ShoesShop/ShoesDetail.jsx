import React, { Component } from 'react'

export default class ShoesDetail extends Component {
  render() {
    const { shoes } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <img style={{ width: '300px' }} src={shoes.image} alt="" />
          </div>
          <div className="col-12 text-left">
            <h1>{shoes.name}</h1>
            <h4 className='fs-5'>{shoes.price} $</h4>
            <span>Description: {shoes.description}</span>
          </div>
        </div>
      </div>
    )
  }
}
