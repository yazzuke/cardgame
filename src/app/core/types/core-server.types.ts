export interface IUser {
  _id?: string;
  username: string;
  time: number;
  wrongChoices: number;
}

export interface IScoreboard {
  _id?: string;
  userId: string;
  wrongChoises: number;
  goodChoises: number;
  timestamp: number;
  resolutionTime: number;
}
