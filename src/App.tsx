
import AgoraUIKit from "agora-react-uikit";
import React, {useState} from "react";
import './index.css';

function App () {
const [videoCall, setVideoCall] = useState(false);

const rtcProps = {
    appId: "c924bd6fb57b44b1809c0746b78875d8",
    channel: "Navatar",
    token: "007eJxTYJh1dVLLtKvzHbufXmg+X5vpYPBH7NC835ZJoVHTDEVfBk1RYEi2NDJJSjFLSzI1TzIxSTK0MLBMNjA3MUsyt7AwN02xuDtDNKUhkJFhQrICEyMDBIL47Ax+iWWJJYlFDAwAL+8hTw==",
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
