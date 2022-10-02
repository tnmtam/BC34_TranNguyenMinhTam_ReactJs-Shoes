import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {shoes} = this.props;
    return (
        <div className="col-4">
        <div className="card mb-5">
            <img className="card-img-top" src={shoes.image} />
            <div className="card-body text-left">
                <h4 className="card-title">{shoes.name}</h4>
                <h5>{shoes.price} $</h5>
                <button className="btn btn-dark" onClick={()=>this.props.xemChiTiet(shoes)}>Add to carts</button>
            </div>
        </div>
    </div>
    )
  }
}
