export interface Data {
  name: String;
}

export type Encrypted = string;

export interface Box {
  id: number;
  title: string;
  description?: string;
  iconPath?: string;
  lastModified: Date;
  cryptPwd: Encrypted;
}

export interface Haven {
  id: number;
  type: 'haven';
  isEditable: boolean;
  data: Box;
}

export interface Vault {
  id: number;
  type: 'vault';
  title: string;
  hasOwnPwd: boolean;
  cryptOwnPwd: Encrypted;
  cryptData: Encrypted;
}

export type Fortress = {
  id: number;
  alias: string;
  assets: (Haven | Vault)[];
};
