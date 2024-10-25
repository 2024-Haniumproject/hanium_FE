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
import writeicon from "../assets/newwrite.png";

function Community() {
    const [activeTab, setActiveTab] = useState("후기");
    const [currentPage, setCurrentPage] = useState(0);
    const [liked, setLiked] = useState([
        { id: 1, liked: false },
        { id: 2, liked: false },
        { id: 3, liked: false },
    ]);
    const [searchTerm, setSearchTerm] = useState(""); // 검색 상태 관리
    const [selectedFilter1, setSelectedFilter1] = useState("전체"); // 첫 번째 드롭다운 필터 상태
    const [selectedFilter2, setSelectedFilter2] = useState("지역"); // 두 번째 드롭다운 필터 상태
    const [isDropdownOpen1, setDropdownOpen1] = useState(false); // 첫 번째 드롭다운 열림 상태
    const [isDropdownOpen2, setDropdownOpen2] = useState(false); // 두 번째 드롭다운 열림 상태

    const handleDropdownClick1 = () => {
        setDropdownOpen1(!isDropdownOpen1); // 첫 번째 드롭다운 열고 닫기 토글
        setDropdownOpen2(false); // 두 번째 드롭다운은 닫기
    };

    const handleDropdownClick2 = () => {
        setDropdownOpen2(!isDropdownOpen2); // 두 번째 드롭다운 열고 닫기 토글
        setDropdownOpen1(false); // 첫 번째 드롭다운은 닫기
    };

    const handleFilterClick1 = (filter) => {
        setSelectedFilter1(filter);
        setDropdownOpen1(false); // 선택 후 드롭다운 닫기
    };

    const handleFilterClick2 = (filter) => {
        setSelectedFilter2(filter);
        setDropdownOpen2(false); // 선택 후 드롭다운 닫기
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
    ).filter((listing) => {
        if (selectedFilter1 === "전체") return true;
        if (selectedFilter1 === "인기순") return true; // 인기순 로직 추가 가능
        return listing.where === selectedFilter2; // 지역 필터링은 selectedFilter2로 처리
    });

    const currentListings = filteredListings.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab); // 탭 변경
        setCurrentPage(0); // 페이지를 첫 페이지로 초기화
    };

    const handleLikeClick = (index) => {
        const updatedLiked = liked.map((item, i) =>
            i === index ? { ...item, liked: !item.liked } : item
        );
        setLiked(updatedLiked); // 상태 업데이트
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

            {/* 검색창 */}
            <div className="searchContainer">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="가고싶은 여행지를 입력하세요. (파리, 이탈리아)"
                    className="searchInput"
                />
            </div>

            {/* 인기 여행지 섹션 복구 */}
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
                        {/* 필터 드롭다운 */}
                        <div className="filter">
                            <div className="filter-dropdown">
                                <div
                                    className="filter-button"
                                    onClick={handleDropdownClick1}
                                >
                                    {selectedFilter1}{" "}
                                    <span className="arrow">&#9662;</span>
                                </div>
                                {isDropdownOpen1 && (
                                    <div className="dropdown-menu">
                                        <div
                                            onClick={() =>
                                                handleFilterClick1("전체")
                                            }
                                        >
                                            최신순
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleFilterClick1("인기순")
                                            }
                                        >
                                            인기순
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 두 번째 드롭다운 */}
                            <div className="filter-dropdown">
                                <div
                                    className="filter-button"
                                    onClick={handleDropdownClick2}
                                >
                                    {selectedFilter2}{" "}
                                    <span className="arrow">&#9662;</span>
                                </div>
                                {isDropdownOpen2 && (
                                    <div className="dropdown-menu">
                                        <div
                                            onClick={() =>
                                                handleFilterClick2("북유럽")
                                            }
                                        >
                                            북유럽
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleFilterClick2("남유럽")
                                            }
                                        >
                                            남유럽
                                        </div>
                                    </div>
                                )}
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
                        {/* 필터 드롭다운 */}
                        <div className="filter">
                            <div className="filter-dropdown">
                                <div
                                    className="filter-button"
                                    onClick={handleDropdownClick1}
                                >
                                    {selectedFilter1}{" "}
                                    <span className="arrow">&#9662;</span>
                                </div>
                                {isDropdownOpen1 && (
                                    <div className="dropdown-menu">
                                        <div
                                            onClick={() =>
                                                handleFilterClick1("전체")
                                            }
                                        >
                                            최신순
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleFilterClick1("인기순")
                                            }
                                        >
                                            인기순
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 두 번째 드롭다운 */}
                            <div className="filter-dropdown">
                                <div
                                    className="filter-button"
                                    onClick={handleDropdownClick2}
                                >
                                    {selectedFilter2}{" "}
                                    <span className="arrow">&#9662;</span>
                                </div>
                                {isDropdownOpen2 && (
                                    <div className="dropdown-menu">
                                        <div
                                            onClick={() =>
                                                handleFilterClick2("북유럽")
                                            }
                                        >
                                            북유럽
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleFilterClick2("남유럽")
                                            }
                                        >
                                            남유럽
                                        </div>
                                    </div>
                                )}
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

            <img
                src={writeicon}
                alt="Write Icon"
                className="fixed-write-icon"
                onClick={() => (window.location.href = "/write")}
            />
        </div>
    );
}

export default Community;
