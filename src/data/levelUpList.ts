import OperativeFirstLevel from "../components/character-class-components/operative-components/level-components/OperativeFirstLevel.tsx";

export const levelUpList: {
  [key: string]: {
    [key: string]: {
      componentForClass: ({ keyID }: { keyID: string }) => JSX.Element;
    };
  };
} = {
  "1": {
    Operative: {
      componentForClass: OperativeFirstLevel, // When this was passed as simply OperativeFirstLevel, keyID would not be passed down and remain undefined. useContext does not work.
    },
  },
};
