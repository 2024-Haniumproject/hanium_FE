import React from "react";
import Slider from "react-slick"; // react-slick import

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/main.css";

import mainpageimg from "../assets/mainpageimg.png";
import recommendimg from "../assets/recommend.png";
import recommendimg2 from "../assets/recommend2.png";
import TravelCard from "../components/TravelCard"; // TravelCard 컴포넌트 임포트
import Navbar from "../components/Navbar";
function Main() {
    const popularDestinations = [
        {
            image: recommendimg,
            title: "서유럽",
        },
        { image: recommendimg2, title: "동유럽" },
        { image: recommendimg, title: "남유럽" },
        { image: recommendimg2, title: "북유럽" },
    ];

    const recommendedDestinations = [
        {
            image: recommendimg,
            title: "서유럽",
            duration: "10박 11일",
        },
        { image: recommendimg2, title: "동유럽" },
        { image: recommendimg2, title: "남유럽" },
        { image: recommendimg, title: "북유럽" },
        { image: recommendimg2, title: "d유럽" },
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

    /*
    const postList = async () => {
        try {
            const { data } = await axios.post(
                "요청할 주소", // 요청을 보낼 주소
                "보낼 값(객체)", // 서버에 보낼 데이터, 보통 JSON 형식
                {
                    headers: {
                        'Content-type': 'application/json', // 보내는 데이터의 형식을 JSON으로 지정
                        'Accept': 'application/json' // 서버에서 받을 데이터 형식을 JSON으로 지정
                    }
                }
            );
            console.log(data); // 요청이 성공했을 때 서버에서 받은 데이터를 출력
        } catch (error) {
            console.log(error); // 요청이 실패했을 때 오류 메시지를 출력
        }
    }
    
*/
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <div>
                <div className="adv">
                    <div className="advImg"></div>
                    <div className="advText">
                        <div className="TextTop">유럽 여행에 대한 모든 것</div>
                        <div className="Texttogether">
                            <div className="TextChat">챗봇</div>
                            <div className="TextTop">에게 물어보아요</div>
                        </div>

                        <div className="TextBottom">
                            챗봇페이지에서 간단한 질문으로도 구체적인 답변을
                            받을 수 있어요
                        </div>
                    </div>
                </div>
                <div className="recommendbox">
                    <div className="recommend">
                        <div className="recommendHot">
                            <div className="recommendTitle">
                                지금 가장 인기있는 여행지
                            </div>
                            <div>
                                <Slider {...sliderSettings}>
                                    {popularDestinations.map((dest, index) => (
                                        <div key={index} className="slide-item">
                                            <TravelCard
                                                image={dest.image}
                                                title={dest.title}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="recoomendPeop">
                            <div className="recommendTitle">
                                현지인 추천 여행지
                            </div>
                            <div>
                                <Slider {...sliderSettings}>
                                    {recommendedDestinations.map(
                                        (dest, index) => (
                                            <div
                                                key={index}
                                                className="slide-item"
                                            >
                                                <TravelCard
                                                    image={dest.image}
                                                    title={dest.title}
                                                />
                                            </div>
                                        )
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chatbot"></div>
            </div>
        </div>
    );
}

export default Main;
