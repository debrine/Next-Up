import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useAbilityScores() {
  const { characterID } = useParams();

  const [strength, setStrength] = useState(getValue(`Strength${characterID}`));
  const [dexterity, setDexterity] = useState(
    getValue(`Dexterity${characterID}`)
  );
  const [constitution, setConstitution] = useState(
    getValue(`Constitution${characterID}`)
  );
  const [intelligence, setIntelligence] = useState(
    getValue(`Intelligence${characterID}`)
  );
  const [wisdom, setWisdom] = useState(getValue(`Wisdom${characterID}`));
  const [charisma, setCharisma] = useState(getValue(`Charisma${characterID}`));
  const [currentCharacterID, setCurrentCharacterID] = useState(characterID);

  // we store characterID in state here as well, as the param in URL
  // can cause the use effect to be triggered before values are updated
  // whenever the character changes, we update all our values off the new ID
  useEffect(() => {
    setStrength(getValue(`Strength${characterID}`));
    setDexterity(getValue(`Dexterity${characterID}`));
    setConstitution(getValue(`Constitution${characterID}`));
    setIntelligence(getValue(`Intelligence${characterID}`));
    setWisdom(getValue(`Wisdom${characterID}`));
    setCharisma(getValue(`Charisma${characterID}`));
    setCurrentCharacterID(characterID);
  }, [characterID]);

  // update callbacks that update state + localStorage.
  // state update is important, as it will trigger a component
  // re-render
  const updateStrength = useCallback(
    (newStrength) => {
      setStrength(newStrength);
      setValue(`Strength${characterID}`, newStrength);
    },
    [characterID]
  );

  const updateWisdom = useCallback(
    (newWisdom) => {
      setWisdom(newWisdom);
      setValue(`Wisdom${characterID}`, newWisdom);
    },
    [characterID]
  );

  const updateConstitution = useCallback(
    (newConstitution) => {
      setConstitution(newConstitution);
      setValue(`Constitution${characterID}`, newConstitution);
    },
    [characterID]
  );

  const updateCharisma = useCallback(
    (newCharisma) => {
      setCharisma(newCharisma);
      setValue(`Charisma${characterID}`, newCharisma);
    },
    [characterID]
  );

  const updateIntelligence = useCallback(
    (newIntelligence) => {
      setIntelligence(newIntelligence);
      setValue(`Intelligence${characterID}`, newIntelligence);
    },
    [characterID]
  );

  const updateDexterity = useCallback(
    (newDexterity) => {
      setDexterity(newDexterity);
      setValue(`Dexterity${characterID}`, newDexterity);
    },
    [characterID]
  );

  return {
    strengthAbility: strength,
    dexterityAbility: dexterity,
    constitutionAbility: constitution,
    intelligenceAbility: intelligence,
    wisdomAbility: wisdom,
    charismaAbility: charisma,
    updateStrength,
    updateCharisma,
    updateConstitution,
    updateDexterity,
    updateWisdom,
    updateIntelligence,
    currentCharacterID,
  };
}
