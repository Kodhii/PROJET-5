import { useParams, Navigate } from "react-router-dom";
import data from "../data/listing.json";
import "./details.scss";
import Rating from "../components/rating";
import Collapse from "../components/collapse";
import Carousel from "../components/carousel";

export default function Details() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="*" replace />;
  }

  return (
    <div className="details">
      <div className="img">
        <Carousel pictures={logement.pictures} />
      </div>
      <div className="infos">
        <div className="infosLeft">
          <div className="infoTxt">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="infoTags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="infosRatingRight">
          <div className="infosRight">
            <p className="host-name">{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            <Rating value={logement.rating} />
          </div>

        </div>
      </div>
      <div className="infosCollapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" contentList={logement.equipments} />
      </div>
    </div>
  );
}