import OperativeFirstLevel from "../components/character-class-components/operative-components/level-components/OperativeFirstLevel.tsx";
// Deployment failing:
// Error: src/data/levelUpList.ts(1,33): error TS2307: Cannot find module '../components/character-class-components/operative-components/level-components/FirstLevelOperative.tsx' or its corresponding type declarations.

export const levelUpList: {
  [key: string]: { [key: string]: { componentForClass: () => JSX.Element } };
} = {
  "1": {
    Operative: {
      componentForClass: OperativeFirstLevel,
    },
  },
};
