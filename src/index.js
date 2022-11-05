import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card name="Stepan Matysik" foto="stepanmaty" email="stepanmatysik@gmail.com" negara="United State of America" />
      <Card name="Luke Kai" foto="elkai" email="lukelai.dev@gmail.com" negara="United Kingdom" />
      <Card name="Muhammad Firdaus" foto="mfirdaus" email="firdausthedev@gmail.com" negara="Malaysia" />
      <Card name="Weiqiang Wang" foto="WeiqiangWang" email="-" negara="China" />
      <Card name="Sean Koh" foto="seankoh" email="seankzw@gmail.com" negara="Singapore" />
      <Card name="Gibson Lam" foto="glam" email="gibsonlam96@gmail.com" negara="Singapore" />
      <Card name="Zephan Wong Kai En" foto="zewokai" email="wzephanke@gmail.com" negara="Singapore" />
      <Card name="Sujith Chenanath" foto="sujithchenanath" email="sujithchenanath@gmail.com" negara="India" />
      <Card name="Avinash" foto="avinash" email="ravinash218@gmail.com" negara="India" />
      <Card name="Steven Vuong" foto="stevuo" email="svuong37@gmail.com" negara="Canada" />
      <Card name="Shannon Torcato" foto="ShannonTorcato" email="torcato.villa@gmail.com" negara="Canada" />
      <Card name="Liam Ha" foto="itsliam" email="hkhanhlam99@gmail.com" negara="United Kingdom" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
