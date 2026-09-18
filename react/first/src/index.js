import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './companents/app/App';
import data from './db.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
let text= 'My site';

let nav={"Главное":"/index","Новости":"/news","О компании":"/company","Машазин":"/shop","Контакты":"/contacts"};
let db= data.people;

let copy='Copyright - 2026';
root.render(
  <React.StrictMode>
    <App  title={text} navigation={nav} db={db} text ={copy}/>
  </React.StrictMode>
);


