import { Link } from "react-router-dom";
import "./cards.scss";

export default function Card({ title, id, image }) {
  return (
    <Link to={`/details/${id}`} className="card">
        <img src={image} alt={title} className="card-img" />
        <div className="card-title">
          <h3>{title}</h3>
        </div>
    </Link>
  );
}