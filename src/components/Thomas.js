import React from "react";
import './Author.css'
import thomas from '/Users/user/Desktop/Qoute-Generator/src/components/Images/thomas.jpeg'
export default function Thomas() {
  return (
    <div className="container text-color8 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Thomas-main">
            <h1>Thomas Edison</h1>
            <img
              src={thomas}
              alt="Thomas Edison"
            ></img>
            <h3>Famous Quotes From Thomas Edison</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “I have not failed. I've just found 10,000 ways that won't work.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “Many of life's failures are people who did not realize how close
              they were to success when they gave up.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “Five percent of the people think; ten percent of the people think
              they think; and the other eighty-five percent would rather die
              than think.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “The three great essentials to achieve anything worthwhile are,
              first, hard work; second, stick-to-itiveness; third, common
              sense.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “Our greatest weakness lies in giving up. The most certain way to
              succeed is always to try just one more time.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Thomas-mini">
            <blockquote className="blockqoute">
              “Just because something doesn't do what you planned it to do
              doesn't mean it's useless.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
