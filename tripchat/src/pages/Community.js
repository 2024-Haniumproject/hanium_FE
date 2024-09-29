import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/community.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelCard from "../components/TravelCard";
import eximg1 from "../assets/recommend.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heartgray from "../assets/heartgray.png";
import heartcolor from "../assets/heartcolor.png";

function Community() {
    const [activeTab, setActiveTab] = useState("후기");
    const [currentPage, setCurrentPage] = useState(0);
    const [liked, setLiked] = useState([
        { id: 1, liked: false },
        { id: 2, liked: false },
        { id: 3, liked: false },
    ]);
    const [searchTerm, setSearchTerm] = useState(""); // 검색 상태 관리

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(0); // 탭 변경 시 첫 페이지로 이동
    };

    const handleLikeClick = (index) => {
        const updatedLiked = liked.map((item, i) =>
            i === index ? { ...item, liked: !item.liked } : item
        );
        setLiked(updatedLiked); // 상태 업데이트
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // 검색어 업데이트
    };

    const popularDestinations = [
        { image: eximg1, title: "서유럽", link: "" },
        { image: eximg1, title: "동유럽", link: "" },
    ];

    const localRecommendations = [
        { image: eximg1, title: "베트남", link: "" },
        { image: eximg1, title: "태국", link: "" },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const popularlistings = [
        {
            img: eximg1,
            title: "도쿄 2박 3일 여행",
            preview: "친구랑 같이 도쿄 2박 3일 여행",
            id: "지브리덕후",
            date: "2023.01.02~2023.12.24",
            link: "/paragliding",
            where: "서유럽",
        },
        {
            img: eximg1,
            title: "도쿄 2박 3일 여행",
            preview: "친구랑 같이 도쿄 2박 3일 여행",
            id: "지브리덕후",
            date: "2023.01.02~2023.12.24",
            link: "/paragliding",
            where: "서유럽",
        },
        {
            img: eximg1,
            title: "도쿄 2박 3일 여행",
            preview: "친구랑 같이 도쿄 2박 3일 여행",
            id: "지브리덕후",
            date: "2023.01.02~2023.12.24",
            link: "/paragliding",
            where: "서유럽",
        },
    ];

    // locallistings 변수 추가 정의
    const locallistings = [
        {
            img: eximg1,
            title: "하노이 3박 4일 여행",
            preview: "베트남 하노이 여행",
            id: "베트남여행자",
            date: "2023.02.01~2023.12.31",
            link: "/hanoi-trip",
            where: "베트남",
        },
        {
            img: eximg1,
            title: "방콕 4박 5일 여행",
            preview: "방콕에서의 즐거운 여행",
            id: "방콕러버",
            date: "2023.03.05~2023.03.10",
            link: "/bangkok-trip",
            where: "태국",
        },
        {
            img: eximg1,
            title: "치앙마이 2박 3일 여행",
            preview: "치앙마이 문화 탐방",
            id: "문화여행자",
            date: "2023.04.15~2023.04.17",
            link: "/chiangmai-trip",
            where: "태국",
        },
    ];

    const itemsPerPage = 8;

    // 검색어를 기준으로 필터링
    const filteredListings = (
        activeTab === "후기" ? popularlistings : locallistings
    ).filter(
        (listing) =>
            listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            listing.preview.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentListings =
        activeTab === "후기"
            ? popularlistings.slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
              )
            : locallistings.slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
              );

    const totalPages = Math.ceil(
        (activeTab === "후기" ? popularlistings.length : locallistings.length) /
            itemsPerPage
    );

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="tabContainer">
                <div
                    className={`tab ${activeTab === "후기" ? "active" : ""}`}
                    onClick={() => handleTabClick("후기")}
                >
                    여행 후기
                </div>
                <div
                    className={`tab ${activeTab === "추천" ? "active" : ""}`}
                    onClick={() => handleTabClick("추천")}
                >
                    현지인 추천
                </div>
            </div>
            <div className="searchContainer">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="가고싶은 여행지를 입력하세요. (파리, 이탈리아)"
                    className="searchInput"
                />
            </div>
            <div className="content">
                {activeTab === "후기" && (
                    <div>
                        <div className="Search"></div>
                        <div className="popluar">
                            <div className="popluarTitle">
                                지금 가장 인기 있는 여행지🔥
                            </div>
                            <div>
                                <Slider {...sliderSettings}>
                                    {popularDestinations.map((dest, index) => (
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
                        <div className="Infoboxes">
                            <div className="InfoSelection"></div>
                        </div>
                        <div className="Written">
                            {currentListings.map((listing, index) => (
                                <Link
                                    to={listing.link}
                                    key={index}
                                    className="listing-item"
                                >
                                    <div className="infomation">
                                        <img
                                            src={listing.img}
                                            alt={listing.name}
                                            className="listing-img"
                                        />
                                        <div className="listing-info">
                                            <div className="title">
                                                {listing.title}
                                            </div>
                                            <div className="info">
                                                {listing.preview}
                                            </div>
                                            <div className="thridline">
                                                <div className="id">
                                                    {listing.id}
                                                </div>
                                                <div className="date">
                                                    {listing.date}
                                                </div>
                                            </div>

                                            <div className="where">
                                                {listing.where}
                                            </div>
                                        </div>
                                        <div className="heart">
                                            <img
                                                src={
                                                    liked[index]?.liked
                                                        ? heartcolor
                                                        : heartgray
                                                }
                                                alt="like"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLikeClick(index);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`page-number ${
                                        i === currentPage ? "active" : ""
                                    }`}
                                    onClick={() => goToPage(i)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === "추천" && (
                    <div>
                        <div className="Search"></div>
                        <div className="popluar">
                            <div className="popluarTitle">
                                현지인이 추천하는 여행지🔥
                            </div>
                            <div>
                                <Slider {...sliderSettings}>
                                    {localRecommendations.map((dest, index) => (
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
                        <div className="Infoboxes">
                            <div className="InfoSelection">
                                <div>전체</div>
                                <div>지역</div>
                            </div>
                        </div>
                        <div className="Written">
                            {currentListings.map((listing, index) => (
                                <Link
                                    to={listing.link}
                                    key={index}
                                    className="listing-item"
                                >
                                    <div className="infomation">
                                        <img
                                            src={listing.img}
                                            alt={listing.name}
                                            className="listing-img"
                                        />
                                        <div className="listing-info">
                                            <div className="title">
                                                {listing.title}
                                            </div>
                                            <div className="info">
                                                {listing.preview}
                                            </div>
                                            <div className="thridline">
                                                <div className="id">
                                                    {listing.id}
                                                </div>
                                                <div className="date">
                                                    {listing.date}
                                                </div>
                                            </div>

                                            <div className="where">
                                                {listing.where}
                                            </div>
                                        </div>
                                        <div className="heart">
                                            <img
                                                src={
                                                    liked[index]?.liked
                                                        ? heartcolor
                                                        : heartgray
                                                }
                                                alt="like"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLikeClick(index);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`page-number ${
                                        i === currentPage ? "active" : ""
                                    }`}
                                    onClick={() => goToPage(i)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Community;
