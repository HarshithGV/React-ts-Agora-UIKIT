
import AgoraUIKit from "agora-react-uikit";
import React, {useState} from "react";
import './index.css';

function App () {
const [videoCall, setVideoCall] = useState(true);

const rtcProps = {
    appId: "c924bd6fb57b44b1809c0746b78875d8",
    channel: "Navatar",
    token: "007eJxTYNBaef3B3SUfrDbItx9YbtHxKHe3kXgzS1SegcWd00x/1DcoMCRbGpkkpZilJZmaJ5mYJBlaGFgmG5ibmCWZW1iYm6ZYrBLnTmkIZGS44S7KysgAgSA+O4NfYlliSWIRAwMAzOQf0w==",
};
const callbacks = {
  EndCall: () => setVideoCall(false),
};
return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
<div style={{ width: "850%", marginTop:"15rem", textAlign:"center"}}>
  <button onClick={() => setVideoCall(true)}>Join Navatar Call</button></div>
);
}

export default App;
