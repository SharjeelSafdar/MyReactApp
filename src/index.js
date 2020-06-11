import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div>Hello, <strong>Sharjeel</strong>!</div>;
  // React.createElement('div', null, 'Hello, Sharjeel!');
}

ReactDOM.render(<Hi/>, document.getElementById('root'));