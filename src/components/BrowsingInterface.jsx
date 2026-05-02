import { useState } from "react";
import { ITEMS } from "../data";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";

export default function BrowsingInterface({ saved, onSave }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");

  const filteredItems = ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

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

      <input
        className="search-bar"
        placeholder="Search all items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onOpen={setSelectedItem}
            saved={saved.has(item.id)}
            onSave={onSave}
          />
        ))}
      </div>
    </main>
  );
}