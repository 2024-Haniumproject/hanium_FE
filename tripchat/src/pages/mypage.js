import React from "react";
import Slider from "react-slick";

import "../styles/mypage.css";
import eximg1 from "../assets/recommend.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelCard from "../components/TravelCard"; // TravelCard 컴포넌트 임포트
import Navbar from "../components/Navbar";

import user from "../assets/user.png";

function MyPage() {
    const Scrapinfo = [
        { image: eximg1, title: "서유럽", link: "" },
        { image: eximg1, title: "동유럽", link: "" },
        { image: eximg1, title: "남유럽", link: "" },
        { image: eximg1, title: "북유럽", link: "" },
    ];

    const Mytravelinfo = [
        { image: eximg1, title: "서유럽", link: "" },
        { image: eximg1, title: "동유럽", link: "" },
        { image: eximg1, title: "남유럽", link: "" },
        { image: eximg1, title: "북유럽", link: "" },
    ];
    const Writteninfo = [
        { image: eximg1, title: "서유럽", link: "" },
        { image: eximg1, title: "동유럽", link: "" },
        { image: eximg1, title: "남유럽", link: "" },
        { image: eximg1, title: "북유럽", link: "" },
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // 기본으로 가장 큰 화면에서는 4개의 슬라이드 표시
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200, // 화면의 너비가 1200px 이하일 때
                settings: {
                    slidesToShow: 3, // 3개의 슬라이드 표시
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 900, // 화면의 너비가 900px 이하일 때
                settings: {
                    slidesToShow: 2, // 2개의 슬라이드 표시
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // 화면의 너비가 600px 이하일 때
                settings: {
                    slidesToShow: 1, // 1개의 슬라이드 표시
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <div>
                <div className="Info">
                    <div className="Img">
                        <img src={user}></img>
                    </div>
                    <div className="InfoText">
                        <div className="Infoid">User1</div>
                        <div className="Infogmail">1234@gmail.com</div>
                    </div>
                </div>
                <div className="Mypagecontents">
                    <div className="Chatbot">내 챗봇 기록 보러가기</div>
                    <div className="Scrap">
                        <div className="selectiontitle">스크랩 글</div>
                        <div>
                            <Slider {...sliderSettings}>
                                {Scrapinfo.map((dest, index) => (
                                    <TravelCard
                                        key={index}
                                        image={dest.image}
                                        title={dest.title}
                                        tolink={dest.link}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="Mytravel">
                        <div className="selectiontitle">나의 여행 지도</div>{" "}
                        <div>
                            <Slider {...sliderSettings}>
                                {Mytravelinfo.map((dest, index) => (
                                    <TravelCard
                                        key={index}
                                        image={dest.image}
                                        title={dest.title}
                                        tolink={dest.link}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="Mytravel">
                        <div className="selectiontitle">내가 작성한 글</div>{" "}
                        <div>
                            <Slider {...sliderSettings}>
                                {Writteninfo.map((dest, index) => (
                                    <TravelCard
                                        key={index}
                                        image={dest.image}
                                        title={dest.title}
                                        tolink={dest.link}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="Logout">로그아웃</div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
