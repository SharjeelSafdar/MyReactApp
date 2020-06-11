import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return  <div>
            Hello, <strong>Sharjeel</strong>!
            <h1>Bootcamp 2020</h1>
            <p>Contents of Bootcamp 2020:</p>
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
          </div>;
  // React.createElement('div', null, 'Hello, Sharjeel!');
}

ReactDOM.render(<Hi/>, document.getElementById('root'));