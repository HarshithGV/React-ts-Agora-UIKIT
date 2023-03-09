
import AgoraUIKit from "agora-react-uikit";
import React, {useState} from "react";

function App () {
const [videoCall, setVideoCall] = useState(true);

const rtcProps = {
    appId: "c924bd6fb57b44b1809c0746b78875d8",
    channel: "Navatar",
    token: "007eJxTYAg+tcVrj9/L1gvZfKzt0zmjn0huevIjuWXNjpZMyb699ooKDMmWRiZJKWZpSabmSSYmSYYWBpbJBuYmZknmFhbmpikWVmWcKQ2BjAx/qhKYGRkgEMRnZ/BLLEssSSxiYAAAs7YgEg==",
};
const callbacks = {
  EndCall: () => setVideoCall(false),
};
return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
  <h3 onClick={() => setVideoCall(true)}>Join</h3>
);
}

export default App;
