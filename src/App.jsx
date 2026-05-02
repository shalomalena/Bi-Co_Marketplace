import { useState } from "react";
import "./styles.css";
import BrowsingInterface from "./components/BrowsingInterface";
import GuidedInterface from "./components/GuidedInterface";

export default function App() {
  const [interfaceType, setInterfaceType] = useState("browse");
  const [saved, setSaved] = useState(new Set());

  function handleSave(id) {
    setSaved((oldSaved) => {
      const newSaved = new Set(oldSaved);

      if (newSaved.has(id)) {
        newSaved.delete(id);
      } else {
        newSaved.add(id);
      }

      return newSaved;
    });
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Bi-Co Marketplace</h1>

        <div className="nav-buttons">
          <button
            className={interfaceType === "browse" ? "active" : ""}
            onClick={() => setInterfaceType("browse")}
          >
            Browse
          </button>

          <button
            className={interfaceType === "guided" ? "active" : ""}
            onClick={() => setInterfaceType("guided")}
          >
            Guided
          </button>
        </div>

        <p>♥ {saved.size} saved</p>
      </header>

      <div className="interface-label">
        {interfaceType === "browse"
          ? "Interface 1: Browsing — users scroll freely through all items"
          : "Interface 2: Guided — users choose a category first"}
      </div>

      {interfaceType === "browse" ? (
        <BrowsingInterface saved={saved} onSave={handleSave} />
      ) : (
        <GuidedInterface saved={saved} onSave={handleSave} />
      )}
    </div>
  );
}