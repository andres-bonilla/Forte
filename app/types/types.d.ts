export type Encrypted = string;

export interface Release {
  lastModified: string;
  version: number;
}

export interface IDEntity {
  id: number;
  alias: string;
  release: Release;
}

export interface InfoBox {
  iconPath?: string;
  description?: string;
  cryptData: Encrypted;
}

export interface Haven extends IDEntity {
  type: 'haven';
  isEditable: boolean;
  info: InfoBox;
}

export interface Vault extends IDEntity {
  type: 'vault';
  hasOwnPwd: boolean;
  cryptOwnPwd: Encrypted;
  cryptInfo: Encrypted; //string que se desencripta como InfoBox
}

export interface Fortress extends IDEntity {
  assets: (Haven | Vault)[];
}

export type FortressRecord = IDEntity[];
