import { useState } from "react";

export default function ItemModal({ item, onClose, saved, onSave }) {
  const [contacted, setContacted] = useState(false);

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-image">{item.image}</div>

        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <p className="category">{item.category}</p>
        <p>{item.description}</p>
        <p>
          Seller: <strong>{item.seller}</strong>
        </p>

        <div className="modal-buttons">
          <button onClick={() => setContacted(true)}>
            {contacted ? "✓ Message Sent!" : "Contact Seller"}
          </button>

          <button className={saved ? "saved" : ""} onClick={() => onSave(item.id)}>
            {saved ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}