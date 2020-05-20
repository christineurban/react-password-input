import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

const SCORE_MAP = {
  0: { label: '', color: ''},
  1: { label: 'Bad', color: 'red' },
  2: { label: 'Weak', color: 'yellow' },
  3: { label: 'Good', color: 'blue' },
  4: { label: 'Strong', color: 'green' },
}

class Password extends Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const { input } = this.state;
    const { rules } = this.props;

    return (
      <div className="password">
        <div className="password__input-wrapper">
          <input className="password__input" type="password" maxlength="25" value={input} onChange={this.handleChange} />
          <div className="password__input-score">{SCORE_MAP[zxcvbn(input).score].label}</div>
          <div className={`password__input-bar password__input-bar--${SCORE_MAP[zxcvbn(input).score].color}`}></div>
        </div>
        <div className="password__rules">
          <div className="password__rules-header">Password Requirements:</div>
          {rules.map((rule) => (
            <div>
              <div className={`password__icon password__icon--${rule.validation(input) ? 'success' : 'error'}`}></div>
              {rule.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Password;
