import { useState } from "react";
import "./collapse.scss";

export default function Collapse({ title, content, contentList  }) {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span className="arrow"></span>
            </div>
            <div className="collapse-content">

            {content && <p>{content}</p>}

            {contentList && (
            <ul>
                {contentList.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
            )}
            </div>
        </div>
    );
}