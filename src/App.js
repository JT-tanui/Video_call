// App.jsx
import React, { useEffect, useState } from "react";
import { VideoStream } from "@videosdk.live/react-sdk"; // Import the VideoStream component

function App() {
  const [token, setToken] = useState(""); // Get your authentication token

  useEffect(() => {
    // Fetch token here (use your getToken function)
    // Set the token using setToken
  }, []);

  return (
    <div className="App">
      {token ? (
        <VideoStream
          token={token}
          // Other props like meetingId, user info, etc.
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
