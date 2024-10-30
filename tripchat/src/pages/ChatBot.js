import React, { useState, useEffect } from "react";
import "../styles/chatbot.css";
import Navbar from "../components/Navbar";
import prahaImage from "../assets/praha.jpg"; // praha.jpg 이미지 불러오기

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [awaitingUserInput, setAwaitingUserInput] = useState(false);
  const [context, setContext] = useState(null); // 여행 계획 짜기와 추천할게 버튼에 따른 컨텍스트 관리

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
      setContext("여행 계획 짜기"); // 여행 계획 짜기 컨텍스트 설정
      setAwaitingUserInput(false);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "어디로 며칠동안 여행을 가시나요?" },
        ]);
      }, 1000);
    } else if (text === "추천할게") {
      setContext("추천할게"); // 추천할게 컨텍스트 설정
      setAwaitingUserInput(false);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "추천하고 싶은 곳이 어디신가요?" },
        ]);
      }, 1000);
    } else if (context === "추천할게" && text === "맛집") {
      setAwaitingUserInput(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "도쿄 맛집을 추천해주세요! 또 추천해주고 싶은 이유도 알려주세요.",
          },
        ]);
      }, 1000);
    } else if (context === "추천할게" && text === "숙소") {
      setAwaitingUserInput(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "도쿄 숙소를 추천해주세요! 또 추천해주고 싶은 이유도 알려주세요.",
          },
        ]);
      }, 1000);
    } else if (context === "추천할게" && text === "관광지") {
      setAwaitingUserInput(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "도쿄 관광지를 추천해주세요! 또 추천해주고 싶은 이유도 알려주세요.",
          },
        ]);
      }, 1000);
    } else if (context === "추천할게" && text === "쇼핑") {
      setAwaitingUserInput(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "도쿄 쇼핑을 추천해주세요! 또 추천해주고 싶은 이유도 알려주세요.",
          },
        ]);
      }, 1000);
    } else if (context === "여행 계획 짜기" && text === "관광지") {
      // 여행 계획 짜기에서 관광지 선택 시 프라하 성 정보 제공
      setAwaitingUserInput(false);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "프라하 성은 중세 유럽의 대표적인 성 중 하나로, 체코의 수도 프라하에서 가장 유명한 관광 명소입니다. 성에서 바라보는 프라하의 전경은 정말 멋지며, 역사적인 건축물과 함께 다양한 볼거리를 제공합니다. 방문해보시면 어떠신가요?",
          },
          {
            sender: "bot",
            text: (
              <div>
                <img
                  src={prahaImage}
                  alt="프라하 성"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p>
                  <a
                    href="https://maps.google.com/?q=Prague+Castle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    구글 맵에서 위치 보기
                  </a>
                </p>
              </div>
            ),
          },
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

    const lastMessageText =
      messages.length > 0 ? messages[messages.length - 1].text : "";

    if (context === "여행 계획 짜기" && userInput.includes("도쿄")) {
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
    } else if (awaitingUserInput && context === "추천할게") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "감사합니다. 의견이 저장되었습니다." },
        ]);
      }, 1000);
      setAwaitingUserInput(false);
    } else if (
      context === "추천할게" &&
      lastMessageText === "추천하고 싶은 곳이 어디신가요?"
    ) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "도쿄로 여행을 가셨군요! 저에게 어떤 걸 추천해주고 싶으신가요?",
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
                ) : typeof msg.text === "string" ? (
                  <span>{msg.text}</span>
                ) : (
                  msg.text // JSX content (e.g., link, image)
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
