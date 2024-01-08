import React from 'react'
import './Author.css'
import colin from '/Users/user/Desktop/Qoute-Generator/src/components/Images/colin.jpeg'
export default function Colin() {
  return (
    <div className="container text-color3 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Colin-main">
            <h1>Colin Powell</h1>
            <img src={colin} alt="Colin Powell"></img>
            <h3>Famous Quotes From Colin Powell</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “All work is honorable.
              Always do your best because someone is watching.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “Never get so close to your position that
              when your position goes, your ego goes with it.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “If you are going to achieve excellence in big things,
              you develop the habit in little matters.”


            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “Control enthusiasm in the face of victories, large or small.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “There is no end to the good you can do if you don’t care who gets the credit.”


            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Colin-mini">
            <blockquote className="blockqoute">
              “Never believe the first thing you hear.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
