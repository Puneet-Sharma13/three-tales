import React, { useState } from "react";
import "./App.css";

const handleNoHover = () => {
  var x = document.getElementById('no-btn');
  x.style.position = "absolute";
  x.style.top = Math.random() * 90 + "vh"; 
  x.style.left = Math.random() * 90 + "vh"; 
};

const handleYes = (setShowAnimations) => {
  setShowAnimations(false);
  console.log("Yes");
};

const App = () => {
  const [showAnimations, setShowAnimations] = useState(true);

  return (
    <>
      <div className={showAnimations ? "cutepie" : "container"}>
        {showAnimations ? (
          <>
            <img src="https://media.tenor.com/0tkCPVxDt1kAAAAi/dudu.gif" />
            <div>
              <h1>Do you like me ?</h1>
              <button onClick={() => handleYes(setShowAnimations)}>Yes</button>
              <button id="no-btn" onMouseEnter={handleNoHover}>No</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className="header_text">Hurrayyyy!!</h1>
              <h1 className="header_text">Now you are all mine 😘😘❤️ </h1>
            </div>
            <div className="gif_container">
              <img src="https://media1.tenor.com/m/ocWsw7ohJsUAAAAC/extasyxx-big-hug.gif" alt="Cute animated illustration"/>
        
            </div>
          </>
        )}
      </div>
      
    </>
  );
};

export default App;
