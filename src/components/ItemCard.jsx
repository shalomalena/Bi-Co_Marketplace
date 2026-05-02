export default function ItemCard({ item, onOpen, saved, onSave }) {
  return (
    <div className="item-card" onClick={() => onOpen(item)}>
      <div className="item-image">{item.image}</div>

      <div className="item-info">
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>
        <p className="category">{item.category}</p>

        <div className="card-buttons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(item);
            }}
          >
            View
          </button>

          <button
            className={saved ? "saved" : ""}
            onClick={(e) => {
              e.stopPropagation();
              onSave(item.id);
            }}
          >
            {saved ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}