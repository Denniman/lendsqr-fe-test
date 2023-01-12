export type CardType = {
  users: string;
  loanUsers: string;
  activeUsers: string;
  savingsUsers: string;
};

export interface IMetrics {
  type: keyof CardType;
  title: string;
  stat: string;
}
