export interface User {
  id: number;
  name: string;
  email: string;
  days: {
    sat: boolean;
    sun: boolean;
    mun: boolean;
    tue: boolean;
    wed: boolean;
    thr: boolean;
    fri: boolean;
  };
}
