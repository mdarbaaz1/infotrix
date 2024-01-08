import React from 'react'
import './Author.css'
import albert from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Albert.jpeg'
export default function Albert() {
  return (
    <div className="container text-color2 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Albert-main">
            <h1>Albert Einstein</h1>
            <img src={albert} alt="Albert Einstein"></img>
            <h3>Famous Quotes From Albert Einstein</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “Logic will get you from A to Z; imagination will get you everywhere.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “Anyone who has never made a mistake has never tried anything new.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “Anyone who has never made a mistake has never tried anything new.”

            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “It is not that I'm so smart. But I stay with the questions much longer.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Albert-mina">
            <blockquote className="blockqoute">
            “A clever person solves a problem. A wise person avoids it.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
