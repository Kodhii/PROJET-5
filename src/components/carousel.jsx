import { useState } from "react";
import "./carousel.scss";

export default function Carousel({ pictures }) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextS = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevS = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    if (!Array.isArray(pictures) || pictures.length === 0) {
        return null;
    }

    return (
        <div className="carousel">

            {length > 1 && (
                <button className="prev" onClick={prevS}>‹</button>
            )}

            <img src={pictures[current]} alt={`slide ${current + 1}`} />

            {length > 1 && (
                <button className="next" onClick={nextS}>›</button>
            )}

            {length > 1 && (
                <p className="counter">{current + 1} / {length}</p>
            )}
        </div>
    );
}