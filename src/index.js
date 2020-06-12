import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return  <div>
            Hello, <strong>Sharjeel</strong>!
            <p><img src="/images/logo.jpg" alt="4IRU Logo" title="4IRU Logo"/></p>
            <h1>Bootcamp 2020</h1>
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
            <p>Page created by Mian Muhammad Sharjeel Safdar.</p>
            <p>Repository Link: <a href="https://github.com/SharjeelSafdar/MyReactApp">Gitub/SharjeelSafdar/MyReactApp</a></p>
          </div>;
  // React.createElement('div', null, 'Hello, Sharjeel!');
}

ReactDOM.render(<Hi/>, document.getElementById('root'));