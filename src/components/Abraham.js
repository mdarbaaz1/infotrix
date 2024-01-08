import React from 'react'
import './Author.css'
import abraham from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Abraham.jpeg'
export default function Abraham() {
  return (
    <div className="container text-color1 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Abraham-main">
            <h1>Abraham Lincoln</h1>
            <img src={abraham} alt="Abraham Lincoln"></img>
            <h3>Famous Quotes From Abraham Lincoln</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini">
            <blockquote className="blockqoute">
              "whatever you are be a good one"
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini">
            <blockquote className="blockqoute">
              “Folks are usually about as happy as they make their minds up to be.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini">
            <blockquote className="blockqoute">
              “Do I not destroy my enemies when I make them my friends?”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini"> 
            <blockquote className="blockqoute">
              “America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.”

            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini">
            <blockquote className="blockqoute">
              “Books serve to show a man that those original thoughts of his aren't very new after all.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Abraham-mini">
            <blockquote className="blockqoute">
              “I can see how it might be possible for a man to look down upon the earth and be an atheist, but I cannot conceive how a man could look up into the heavens and say there is no God.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
