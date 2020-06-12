import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return  <div className="mainDiv">
            <h1 className="mainHeading">Bootcamp 2020</h1>
            <div className="courseDetails">
              <div className="contents">
                <h3>Contents:</h3>
                <p>
                  Free online learn to earn fasttrack bootcamp to learn freelancing and do remote work in the 
                  COVID-19 economic environment. Contents of Bootcamp 2020:
                </p>
                <ul>
                  <li>Short Intro to GitHub</li>
                  <li>React for Beginners</li>
                  <li>Gatsby.js</li>
                  <li>Headless CMS</li>
                  <li>Fiverr Intro</li>
                  <li>Redux Basics</li>
                  <li>API Development Using Express and MogoDB</li>
                  <li>PWA</li>
                  <li>Docker and Google Cloud Run</li>
                  <li>CI/CD</li>
                </ul>
              </div>

              <div className="faculty">
                <h3>Faculty:</h3>
                <h4>For English Classes:</h4>
                <ul>
                  <li>Zia Khan</li>
                  <li>Hira Khan</li>
                  <li>Zeeshan Hanif</li>
                  <li>Adil Altaf</li>
                  <li>Danyal Nagori</li>
                </ul>
                <h4>For Urdu Classes:</h4>
                <ul>
                  <li>Mohsin Khalid</li>
                  <li>Aamir Pinger</li>
                  <li>Bashir Aziz</li>
                  <li>Ameen Alam</li>
                </ul>
              </div>
            </div>
            
            <div className="footer">
              {/* <p>{`The following strings are written with JS, not JSX.`}</p> */}
              <p>{`Page created by Mian Muhammad Sharjeel Safdar (PIAIC106535).`}</p>
              <p>
                Repository Link: 
                <a 
                  href="https://github.com/SharjeelSafdar/MyReactApp" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`Gitub/SharjeelSafdar/MyReactApp`}
                </a>
              </p>
            </div>
          </div>;
  // React.createElement('div', null, 'Hello, Sharjeel!');
}

ReactDOM.render(<Hi/>, document.getElementById('root'));