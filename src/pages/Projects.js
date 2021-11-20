import React from 'react';
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <main class="row-12">
        <section class="col projects">
            <figure class="row-8 m-4" id="project1">
                <Link href="https://filipalh.github.io/Weather-Tracker/" target="_blank"><img src="weather-tracker.png" alt="weather"></img></Link>
                <h2 class="mt-2" id="projectName">
                    Weather Tracker:  
                    <a href="https://github.com/FilipAlH/Weather-Tracker">GitHub</a>
                </h2>
            </figure>

            <figure class="row-3 m-4" id="project2">
                <Link href="https://filipalh.github.io/CSS-CheatSheet-Website/" target="_blank"><img src="CSS.png" alt="css"></img></Link>
                <h3 class="mt-2" id="projectName">
                    CSS-Style CheatSheet:  
                    <a href="https://github.com/FilipAlH/CSS-CheatSheet-Website">GitHub</a>
                </h3>
            </figure>

            <figure class="row-3 m-4" id="project3">
                <Link href="https://filipalh.github.io/StockOfTheTalk/" target="_blank"><img src="sott.png" alt="stocks"></img></Link>
                <h3 class="mt-2" id="projectName">
                    Stock Of The Talk:  
                    <a href="https://github.com/FilipAlH/StockOfTheTalk">GitHub</a>
                </h3>
            </figure>

            <figure class="row-3 m-4" id="project4">
                <Link href="https://teach-through-talk.herokuapp.com/" target="_blank"><img src="stockofthetalk.png" alt="stock"></img></Link>
                <h3 class="mt-2" id="projectName">
                    Teach thru Talk - on Heroku
                    <a href="https://github.com/FilipAlH/TeachThruTalk">Github</a>
                </h3>
            </figure>
            
            <figure class="row-3 m-4" id="project5">
                <Link href="#"><img src="placeholder.jpg" alt="placeholder"></img></Link>
                <h3 class="mt-2" id="projectName">
                    placeholder
                </h3>
            </figure>
        </section>
    </main>
  );
}