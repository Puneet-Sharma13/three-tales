import React from "react";
import "./App.css";
// Importing the components we will use in our
const handleNoHover = () => {
  var x = document.getElementById('no-btn');
  x.style.position = "absolute";
  x.style.top = Math.random() * 90 + "vh"; 
  x.style.left = Math.random() * 90 + "vh"; 
}
const handleYes = () => {
  document.getElementsByTagName('h1')[0].textContent = "Congrats you are mine 😘😘❤️";
  console.log("yes");
}
const App = () => {
  return (
    <>
    <div className="cutepie">
    {!double && < img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNhdHUxZzRzdDNkbWdibWF3eTVqdnczYXV4NjBsYzMxbnF5cXlpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI4sFlp73fvEYgw/giphy.gif" alt="cute gif" />
        }
        {double && < img src={giff} alt="cute gif" />
        }
      <img src="https://media2.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/200.webp?cid=ecf05e4753ezatati6uik18eqrznjmofteht13l1f30qazop&ep=v1_gifs_related&rid=200.webp&ct=g" />
      <div>
        <h1>  Do you like me ?</h1>
        <button onClick = {handleYes}>yes</button>
        <button id= "no-btn" onMouseEnter = {handleNoHover}>No</button>
      </div>
    </div>
    </>
  );
};

export default App;
