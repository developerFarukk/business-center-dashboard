

export interface TClient {
  id: number;
  email: string;
  username: string;
  organization: string | null;
  apiKey: string;
  secret: string;
  balance: number;
  smsSent: number;
  createdAt: string;
  updatedAt: string; 
}