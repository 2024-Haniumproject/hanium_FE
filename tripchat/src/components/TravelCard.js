function TravelCard({ image, title, duration }) {
    return (
        <div className="travel-card">
            <img src={image} alt={title} className="travel-image" />
            <div className="travel-info">
                <div>{title}</div>
            </div>
        </div>
    );
}

export default TravelCard;
