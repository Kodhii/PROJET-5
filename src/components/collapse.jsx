import { useState } from "react";
import "./collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span className="arrow"></span>
            </div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>
    );
}