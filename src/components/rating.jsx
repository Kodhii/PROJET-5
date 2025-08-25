import "./rating.scss";

export default function Rating({ value }) {
  const rating = parseInt(value, 10);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`star ${star <= rating ? "filled" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}