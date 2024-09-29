import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logoimg from "../assets/logoimg.png";
import logotxt from "../assets/logotxt.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 확인
    const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 상태
    const [pageTitle, setPageTitle] = useState("Review"); // 현재 페이지 제목 상태

    // 햄버거 메뉴 클릭 시 토글
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // 페이지 경로에 따라 제목을 설정하는 useEffect
    useEffect(() => {
        switch (location.pathname) {
            case "/chatbot":
                setPageTitle("ChatBot");
                break;
            case "/chathistory":
                setPageTitle("Chat History");
                break;
            case "/community":
                setPageTitle("Review");
                break;
            case "/mypage":
                setPageTitle("My Page");
                break;
            case "/login":
                setPageTitle("Login");
                break;
            default:
                setPageTitle("Review");
        }
    }, [location.pathname]);

    return (
        <div className="Nav">
            {/* 로고와 텍스트는 기본 화면에서만 표시 */}
            <div className="img" onClick={() => navigate("/main")}>
                <div className="navimg">
                    <img src={logoimg} alt="Logo" />
                </div>
                <div className="navimgtitle">
                    <img src={logotxt} alt="Logo Text" />
                </div>
            </div>
            {/* 페이지 제목 - 작은 화면에서는 중앙에 표시 */}
            <div className="pageTitle">{pageTitle}</div>

            {/* 햄버거 메뉴 버튼 */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* 컴포넌트 메뉴 */}
            <div className={`component ${menuOpen ? "open" : ""}`}>
                <div
                    className={`moving ${
                        location.pathname === "/chatbot" ? "active" : ""
                    }`}
                    onClick={() => navigate("/chatbot")}
                >
                    ChatBot
                </div>
                <div
                    className={`moving ${
                        location.pathname === "/chathistory" ? "active" : ""
                    }`}
                    onClick={() => navigate("/chathistory")}
                >
                    Chat History
                </div>
                <div
                    className={`moving ${
                        location.pathname === "/community" ? "active" : ""
                    }`}
                    onClick={() => navigate("/community")}
                >
                    Review
                </div>
                <div
                    className={`moving ${
                        location.pathname === "/mypage" ? "active" : ""
                    }`}
                    onClick={() => navigate("/mypage")}
                >
                    My page
                </div>
                <div
                    className={`moving ${
                        location.pathname === "/login" ? "active" : ""
                    }`}
                    onClick={() => navigate("/login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default Navbar;
