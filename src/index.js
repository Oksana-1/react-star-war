import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/*import StarDbAPIService from "./api";
const api = new StarDbAPIService();

api.getPeople().then((response) => {
  console.log(response);
}).catch((e) => {
  console.error(`Network error! ${e}`);
});
api.getPersonById(1).then((response) => {
  console.log(response);
}).catch((e) => {
  console.error(`Network error! ${e}`);
});*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
