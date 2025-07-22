
export interface TBulkSms {
  id: number;
  email: string;
  username: string;
  organization: string | null;
  balance: number;
  smsSent: number;
  createdAt: string; 
  updatedAt: string; 
}