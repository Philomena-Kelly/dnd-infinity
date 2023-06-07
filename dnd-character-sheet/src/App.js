import React from "react";
import CharacterSheet from "./CharacterSheet";
import characterData from "./characterData.json";

const App = () => {
  return (
    <div>
      <CharacterSheet character={characterData} />
    </div>
  );
};

export default App;
