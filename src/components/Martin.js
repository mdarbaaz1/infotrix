import React from "react";
import './Author.css'
import martin from '/Users/user/Desktop/Qoute-Generator/src/components/Images/Martin.jpeg'
export default function Martin() {
  return (
    <div className="container text-color6 body">
      <div className="row">
        <div className="large-3 medium-2 small p ">
          <div className="card1 card-body text h Martin-main">
            <h1>Martin Luther King Jr</h1>
            <img
              src={martin}
              alt="Martin Luther"
            ></img>
            <h3>Famous Quotes From Martin Luther</h3>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "Out of the mountain of despair, a stone of hope."
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "We shall overcome because the arc of the moral universe is long,
              but it bends toward justice."
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "I oppose the war in Vietnam because I love America. I speak out
              against it not in anger but with anxiety and sorrow in my heart,
              and above all with a passionate desire to see our beloved country
              stand as a moral example of the world."
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "Injustice anywhere is a threat to justice everywhere. We are
              caught in an inescapable network of mutuality, tied in a single
              garment of destiny. Whatever affects one directly, affects all
              indirectly."
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "True peace is not merely the absence of tension; it is the
              presence of justice."
            </blockquote>
          </div>
        </div>
        <div className="large-1 medium-1 small p">
          <div className="card1 card-body text h Martin-mini">
            <blockquote className="blockqoute">
              "Every nation must now develop an overriding loyalty to mankind as
              a whole in order to preserve the best in their individual
              societies."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
