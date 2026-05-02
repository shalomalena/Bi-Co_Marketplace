import { useState } from "react";
import { ITEMS, CATEGORIES } from "../data";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";

export default function GuidedInterface({ saved, onSave }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryItems = selectedCategory
    ? ITEMS.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <main className="main">
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          saved={saved.has(selectedItem.id)}
          onSave={onSave}
        />
      )}

      {!selectedCategory ? (
        <>
          <h2 className="center">What are you looking for?</h2>
          <p className="center muted">Choose a category to get started.</p>

          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                className="category-card"
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>
                  {ITEMS.filter((item) => item.category === cat.name).length} items
                </p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back to Categories
          </button>

          <h2>{selectedCategory}</h2>

          <div className="grid">
            {categoryItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onOpen={setSelectedItem}
                saved={saved.has(item.id)}
                onSave={onSave}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}