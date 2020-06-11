import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return React.createElement('div', null, 'Hello, World');
  // <div>Hello, World!</div>;
}

ReactDOM.render(<Hi/>, document.getElementById('root'));