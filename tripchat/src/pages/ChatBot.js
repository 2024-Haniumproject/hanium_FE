import React, { useState, useEffect } from "react";
import "../styles/chatbot.css";
import Navbar from "../components/Navbar";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [initialized, setInitialized] = useState(false);

  const addInitialMessages = () => {
    const initialMessages = [
      { sender: "bot", text: "안녕하세요! 무엇을 도와드릴까요?" },
    ];

    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages((prev) => {
          if (!prev.some((existingMsg) => existingMsg.text === msg.text)) {
            return [...prev, msg];
          }
          return prev;
        });
      }, index * 500);
    });

    setTimeout(() => {
      setMessages((prev) => {
        if (!prev.some((existingMsg) => existingMsg.sender === "buttons")) {
          return [
            ...prev,
            { sender: "buttons", buttons: ["여행 계획 짜기", "추천할게"] },
          ];
        }
        return prev;
      });
    }, initialMessages.length * 500 + 1000);
  };

  const handleOptionClick = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);

    if (text === "여행 계획 짜기") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "어디로 며칠동안 여행을 가시나요?" },
        ]);
      }, 1000);
    }

    if (text.includes("도쿄")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "겨울에 여행을 가시는 군요! 당일 날씨는 조금 쌀쌀할 예정입니다. 어떤 도움을 받고 싶나요?",
          },
          { sender: "buttons", buttons: ["맛집", "숙소", "관광지", "쇼핑"] },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!initialized) {
      addInitialMessages();
      setInitialized(true);
    }
  }, [initialized]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // 여행 관련 메시지를 챗봇이 인식했을 때 응답 추가
    if (userInput.includes("도쿄")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "겨울에 여행을 가시는 군요! 당일 날씨는 조금 쌀쌀할 예정입니다. 어떤 도움을 받고 싶나요?",
          },
          { sender: "buttons", buttons: ["맛집", "숙소", "관광지", "쇼핑"] },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message-container ${msg.sender}`}>
              <div className={`message ${msg.sender}`}>
                {msg.sender === "buttons" ? (
                  <div className="button-container">
                    {msg.buttons.map((btn, btnIndex) => (
                      <button
                        key={btnIndex}
                        className="option-button"
                        onClick={() => handleOptionClick(btn)}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                ) : (
                  <span>{msg.text}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
          <button onClick={handleSendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
