import React from 'react'
import Review from './review/Review'

export default function Testimonials() {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row text-center mb-3">
          <div className="col-12">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Review/>
          </div>
        </div>
      </div>
    </>
  )
}
