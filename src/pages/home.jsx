import "./home.scss";
import data from "../data/listing.json";
import Card from "../components/cards.jsx";
import Banner from "../components/banner.jsx";
import homeBanner from "../assets/images/homeBanner.png";

export default function Home() {
  return (
    <div className="home">
      <Banner
        image={homeBanner}
        text={
          <>
            <span className="line1">Chez vous,</span>
            <span className="line2">partout et ailleurs</span>
          </>
        }
      />

      <div className="cards-container">
        {data.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.cover}
            />
          );
        })}
      </div>
    </div>
  );
}