import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">

      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fa fa-facebook"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fa fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fa fa-instagram"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fa fa-linkedin"></i></a>
        </section>

        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" htmlFor="form5Example21">Email address</label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section>
          <p className="mb-0">
          At Beauty Store, we're dedicated to helping you discover and embrace your unique beauty. We offer a carefully curated selection of premium beauty products and accessories to enhance your natural radiance and express your personal style.
          </p>
        </section>
      </div>

      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2023 Copyright: <a className="text-white" href="/">Beauty Store</a>
      </div>
    </footer>

  )
}
