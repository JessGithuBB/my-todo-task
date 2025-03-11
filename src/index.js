import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import TodoList from './components/TodoList';
// import SubmitForm from './components/SubmitForm';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  {/* <Header />     */}
    <App />

 
  
  </React.StrictMode>
);

