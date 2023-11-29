import React from 'react'
import { Link } from 'react-router-dom'

export default function TrendingNow() {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row text-center mb-3">
          <div className="col-12">
            <h2>Trending Now</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-12 mb-3">
            <div className="card" style={{width: "100%"}}>
              <img className="card-img-top" src="https://www.kaocollins.com/wp-content/uploads/cosmetics-beauty-products-300x200.jpg" alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-3">
            <div className="card" style={{width: "100%"}}>
              <img className="card-img-top" src="https://www.kaocollins.com/wp-content/uploads/cosmetics-beauty-products-300x200.jpg" alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-3">
            <div className="card" style={{width: "100%"}}>
              <img className="card-img-top" src="https://www.kaocollins.com/wp-content/uploads/cosmetics-beauty-products-300x200.jpg" alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-3">
            <div className="card" style={{width: "100%"}}>
              <img className="card-img-top" src="https://www.kaocollins.com/wp-content/uploads/cosmetics-beauty-products-300x200.jpg" alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Product 4</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  )
}
  