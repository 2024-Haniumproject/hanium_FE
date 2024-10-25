import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main"; // 메인 페이지 컴포넌트
import Mypage from "./pages/mypage";
import Community from "./pages/Community";
import Chathistory from "./pages/chathistory";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/mypage" element={<Mypage />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/chathistory" element={<Chathistory />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
