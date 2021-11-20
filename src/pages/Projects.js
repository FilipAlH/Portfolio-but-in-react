import React from 'react';
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
      <div>
    <div className="row-12"> 
          <ul className="nav nav-tabs colorP" id="myTab" role="tablist">
            <li className="nav-item" role="presentation"><button class="nav-link"><a href="#project1">Weather Tracker</a></button></li>
            <li className="nav-item" role="presentation"><button class="nav-link"><a href="#project2">CSS CheatSheet</a></button></li>
            <li className="nav-item" role="presentation"><button class="nav-link"><a href="#project3">Stock Discussion Tracker</a></button></li>
            <li className="nav-item" role="presentation"><button class="nav-link"><a href="#project4">Teach Thru Talk</a></button></li>
          </ul>
        </div>
    <div className="row-12">
        <section className="col projects">
            <figure className="row-8 m-4" id="project1">
                <a href="https://filipalh.github.io/Weather-Tracker/" target="_blank" rel="noreferrer"><img src="weather-tracker.png" alt="weather"></img></a>
                <h2 className="mt-2" id="projectName">
                    Weather Tracker:  
                    <a href="https://github.com/FilipAlH/Weather-Tracker" target="_blank" rel="noreferrer">GitHub</a>
                </h2>
            </figure>

            <figure className="row-3 m-4" id="project2">
                <a href="https://filipalh.github.io/CSS-CheatSheet-Website/" target="_blank" rel="noreferrer"><img src="CSS.png" alt="css"></img></a>
                <h3 class="mt-2" id="projectName">
                    CSS-Style CheatSheet:  
                    <a href="https://github.com/FilipAlH/CSS-CheatSheet-Website" target="_blank" rel="noreferrer">GitHub</a>
                </h3>
            </figure>

            <figure className="row-3 m-4" id="project3">
                <a href="https://filipalh.github.io/StockOfTheTalk/" target="_blank" rel="noreferrer"><img src="sott.png" alt="stocks"></img></a>
                <h3 class="mt-2" id="projectName">
                    Stock Of The Talk:  
                    <a href="https://github.com/FilipAlH/StockOfTheTalk" target="_blank" rel="noreferrer">GitHub</a>
                </h3>
            </figure>

            <figure className="row-3 m-4" id="project4">
                <a href="https://teach-through-talk.herokuapp.com/" target="_blank" rel="noreferrer"><img src="stockofthetalk.png" alt="stock"></img></a>
                <h3 className="mt-2" id="projectName">
                    Teach thru Talk - on Heroku
                    <a href="https://github.com/FilipAlH/TeachThruTalk" target="_blank" rel="noreferrer">Github</a>
                </h3>
            </figure>
            
            <figure className="row-3 m-4" id="project5">
                <a href="https://google.ca" target="_blank" rel="noreferrer"><img src="placeholder.jpg" alt="placeholder"></img></a>
                <h3 className="mt-2" id="projectName">
                    placeholder
                </h3>
            </figure>
        </section>
    </div>
    </div>
  );
}