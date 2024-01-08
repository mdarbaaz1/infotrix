import React from "react";
import './Author.css'
import nikola from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Nikola.jpeg'
export default function Nikola() {
  return (
    <div className="container text-color7 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Nikola-main">
            <h1>Nikola Tesla</h1>
            <img
              src={nikola}
              alt="Nikola Tesla"
            ></img>
            <h3>Famous Quotes From Nikola Tesla</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “If you want to find the secrets of the universe, think in terms
              of energy, frequency and vibration.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “I don't care that they stole my idea . . I care that they don't
              have any of their own”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “The day science begins to study non-physical phenomena, it will
              make more progress in one decade than in all the previous
              centuries of its existence.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “The scientists of today think deeply instead of clearly. One must
              be sane to think clearly, but one can think deeply and be quite
              insane.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “The present is theirs; the future, for which I really worked, is
              mine.”
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Nikola-mini">
            <blockquote className="blockqoute">
              “If your hate could be turned into electricity, it would light up
              the whole world.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
