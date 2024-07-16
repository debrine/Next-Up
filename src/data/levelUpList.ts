import OperativeFirstLevel from '../components/character-class-components/operative-components/level-components/OperativeFirstLevel';

export const levelUpList: {
  [key: string]: {
    [key: string]: {
      componentForClass: ({ keyID }: { keyID: string }) => JSX.Element;
    };
  };
} = {
  '1': {
    Operative: {
      componentForClass: OperativeFirstLevel,
    },
  },
};
