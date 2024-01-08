import React from 'react'
import './Author.css'
import joyce from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Joyce.jpeg'
export default function Joyce() {
  return (
    <div className="container text-color4 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Joyce-main">
            <h1>Joyce Meyer</h1>
            <img src={joyce} alt="Joyce Meyer"></img>
            <h3>Famous Quotes From Joyce Meyer</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
            “One mistake does not have to rule a person's entire life.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
            “When you are tempted to give up, your breakthrough is probably just around the corner.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
            “We all face storms in life. Some are more difficult than others, but we all go through trials and tribulation. That’s why we have the gift of faith.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
            “You can suffer the pain of change or suffer remaining the way you are.”

            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
              “Courage is fear that has said its prayers and decided to go forward anyway.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Joyce-mini">
            <blockquote className="blockqoute">
            “There are no drive-thru breakthroughs. Breakthroughs take time.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
