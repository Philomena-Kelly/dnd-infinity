import React, { useState } from "react";

const CharacterSheet = ({ character }) => {
  const [rolls, setRolls] = useState({});

  const rollDice = (skill) => {
    const rollResult = Math.floor(Math.random() * 20) + 1; // Rolls a d20
    setRolls({ ...rolls, [skill]: rollResult });
  };

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Class: {character.class}</p>
      <p>Race: {character.race}</p>
      <p>Level: {character.level}</p>

      <h3>Abilities</h3>
      <ul>
        <li>Strength: {character.strength}</li>
        <li>Dexterity: {character.dexterity}</li>
        <li>Constitution: {character.constitution}</li>
        <li>Intelligence: {character.intelligence}</li>
        <li>Wisdom: {character.wisdom}</li>
        <li>Charisma: {character.charisma}</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>
          Acrobatics:{" "}
          {character.skills.acrobatics.proficient ? (
            <button onClick={() => rollDice("acrobatics")}>Roll (d20)</button>
          ) : (
            "Not proficient"
          )}{" "}
          {rolls.acrobatics && `(Roll result: ${rolls.acrobatics})`}
        </li>
        <li>
          Animal Handling:{" "}
          {character.skills.animalHandling.proficient ? (
            <button onClick={() => rollDice("animalHandling")}>
              Roll (d20)
            </button>
          ) : (
            "Not proficient"
          )}{" "}
          {rolls.animalHandling && `(Roll result: ${rolls.animalHandling})`}
        </li>
        {/* Add similar lines for other skills */}
      </ul>
    </div>
  );
};

export default CharacterSheet;
