import "./banner.scss";

export default function banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt="Bannière" />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}