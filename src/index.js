import React, { Component } from 'react';
import { render } from 'react-dom';
import Password from './Password';
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rules: [
        {
          text: '6+ characters',
          validation: (val) => val.length >= 6
        },
        {
          text: 'with at least one digit',
          validation: (val) => /\d/.test(val)
        },
        {
          text: 'with at least one special character',
          validation: (val) => /[^a-zA-Z0-9]/.test(val)
        },
      ]
    };
  }

  render() {
    const { rules } = this.state;

    return (
      <div>
        <Password rules={rules} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
