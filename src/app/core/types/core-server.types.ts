export interface IUser {
  id?: string;
  username: string;
  time: number;
  wrongChoices: number;
}

export interface IScoreboard {
  id?: string;
  userId: string;
  wrongChoises: number;
  goodChoises: number;
  timestamp: number;
  resolutionTime: number;
}

export interface ICard {
  image: string;
  key: string;
  text: string;
  isSelected: boolean;
}
