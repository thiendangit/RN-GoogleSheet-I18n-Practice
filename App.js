import React, {Component} from 'react';
import {I18nextProvider} from 'react-i18next';
import I18n from './i18n/i18n';
import {HelloI18n} from './HelloI18n';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <I18nextProvider i18n={I18n}>
        <HelloI18n/>
      </I18nextProvider>
    );
  }
}

export default App;
