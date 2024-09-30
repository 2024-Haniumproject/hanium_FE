import React, { useState } from "react";
import "../styles/chathistory.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eximg1 from "../assets/recommend.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Chathistory() {
    const [currentPage, setCurrentPage] = useState(0);

    // 여행 리스트 데이터
    const listings = [
        {
            img: eximg1,
            title: "하노이 3박 4일 여행",
            date: "2023/04/21",
        },
        {
            img: eximg1,
            title: "하노이 3박 4일 여행",
            date: "2023/04/21",
        },
        {
            img: eximg1,
            title: "하노이 3박 4일 여행",
            date: "2023/04/21",
        },
    ];

    // 한 페이지에 표시할 항목 수
    const itemsPerPage = 8;

    // 총 페이지 수 계산
    const totalPages = Math.ceil(listings.length / itemsPerPage);

    // 현재 페이지에 표시할 항목 계산
    const currentListings = listings.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    // 페이지 변경 함수
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <nav>
                <Navbar />
            </nav>

            <div className="content">
                <div>
                    -
                    <div className="Infoboxes">
                        <div className="InfoSelection"></div>
                    </div>
                    <div className="Written2">
                        {currentListings.map((listing, index) => (
                            <Link
                                to={listing.link}
                                key={index}
                                className="listing"
                            >
                                <div className="infomation2">
                                    <div className="infoimg">
                                        <img
                                            src={listing.img}
                                            alt={listing.name}
                                            className="listingimg"
                                        />
                                    </div>

                                    <div className="listinginfo">
                                        <div>여행지</div>
                                        <div>{listing.title}</div>
                                    </div>
                                    <div className="date">{listing.date}</div>
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
            </div>
        </div>
    );
}

export default Chathistory;
