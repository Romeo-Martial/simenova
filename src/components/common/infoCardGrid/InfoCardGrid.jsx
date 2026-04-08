import "./infoCardGrid.css";

export default function InfoCardGrid({ items = [], columns = 3 }) {
  return (
    <div className={`info-card-grid info-card-grid--${columns}`}>
      {items.map((item) => (
        <article key={item.id} className="info-card-grid__card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
