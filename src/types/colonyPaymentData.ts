export interface ColonyPaymentData {
  colonyName: string;
  colonyMetaData: string;
  colonyTickers: string;
  domain: string;
  recipientUsername: string | null;
  colonyAdress: string;
  recipient: string;
  amountPayed: number;
  mentions: string;
  transactionId: string;
  tsxId: string;
}
