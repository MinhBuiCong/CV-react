import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./Start-page";
import Home from "./Home page/Home-page";

const computerLogo = [
  "Asus logo",
  "Apple logo",
  "HP logo",
  "Razer logo",
  "Acer logo",
];

const computerHardware = [
  {
    id: "1",
    name: "hard drive",
    brand: "samsung",
    storage: "128GB",
    read: "1 GBps",
    write: "500 Mbps",
    dimensions: "2,5",
  },
  {
    id: "2",
    name: "hard drive",
    brand: "Western Digital",
    storage: "500GB",
    read: "2 GBps",
    write: "1 GBps",
    dimensions: "2,5",
  },
  {
    id: "3",
    name: "hard drive",
    brand: "HP",
    storage: "1TB",
    read: "3 GBps",
    write: "256 Mbps",
    dimensions: "3,5",
  },
];

// function summerSale() {
//   return (
//     <div>
//       <h1>Summersale is out!</h1>
//     </div>
//   );
// }

// function winterTime() {
//   return (
//     <div>
//       <h1>Gaming is on!</h1>
//     </div>
//   );
// }

// const list = [1, 2, 3, 4, 5, 6, 7];

// function Hello({ quote, message, number }) {
//   return (
//     <div>
//       <h1>{quote}</h1>
//       <p>{message}</p>
//       <p>{number}</p>
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App logos={computerLogo} hardware={computerHardware} />
    {/* <Hello
      quote="Welcome to my site"
      message="This is dynamic string that will change"
      number={104854798}
    /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
