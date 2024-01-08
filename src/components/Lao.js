import React from "react";
import './Author.css'
import lao from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Lao-Tzu.webp'
export default function Lao() {
  return (
    <div className="container text-color5 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Lao-main">
            <h1>Lao Tzu</h1>
            <img
              src={lao}
              alt="Lao Tzu"
            ></img>
            <h3>Famous Quotes From Lao Tzu</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “Being deeply loved by someone gives you strength, while loving
              someone deeply gives you courage.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “The journey of a thousand miles begins with a single step.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “Those who know do not speak. Those who speak do not know.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “Life is a series of natural and spontaneous changes. Don't resist
              them; that only creates sorrow. Let reality be reality. Let things
              flow naturally forward in whatever way they like.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “When you are content to be simply yourself and don't compare or
              compete, everyone will respect you.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Lao-mini">
            <blockquote className="blockqoute">
              “If you are depressed you are living in the past. If you are
              anxious you are living in the future. If you are at peace you are
              living in the present.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
