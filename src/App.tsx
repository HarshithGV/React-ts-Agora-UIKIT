
import AgoraUIKit from "agora-react-uikit";
import React, {useState} from "react";
import './index.css';

function App () {
const [videoCall, setVideoCall] = useState(true);

const rtcProps = {
          
    appId: "c924bd6fb57b44b1809c0746b78875d8",
    channel: "Navatar",
    token: "007eJxTYIixclF0utk2afm+P+/yoxbuEFZ8+rlqTtZc4yudd17uyeJTYEi2NDJJSjFLSzI1TzIxSTK0MLBMNjA3MUsyt7AwN02x+BCWntIQyMhwMnApKyMDBIL47Ax+iWWJJYlFDAwANPkiWA==",

  };
const callbacks = {
  EndCall: () => setVideoCall(false),
};
return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
<div style={{ width: "100%", display: "flex", marginTop:"15rem", textAlign:"center"}}>
  <button onClick={() => setVideoCall(true)}>Join Navatar Call</button></div>
);
}

export default App;
