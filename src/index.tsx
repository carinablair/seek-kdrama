import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DramaSearch from './components/DramaSearch';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title"> Seek Kdrama</h1>
        <DramaSearch />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
