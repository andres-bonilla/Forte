import {atom} from 'jotai';
import {Fortress, Haven, Vault} from '../types';

const emptyFortress: Fortress = {
  id: 0,
  alias: '',
  assets: [],
};

export const fortress = atom(emptyFortress);

export const alias = atom(
  get => get(fortress).alias,
  (get, set, newAlias: string) =>
    set(fortress, {...get(fortress), alias: newAlias}),
);

export const assets = atom(get => get(fortress).assets);

export const addAsset = atom(null, (get, set, newAsset: Haven | Vault) => {
  const currentFortress = get(fortress);
  set(fortress, {
    ...currentFortress,
    assets: [...currentFortress.assets, newAsset],
  });
});

export const editAsset = atom(null, (get, set, newAsset: Haven | Vault) => {
  const currentFortress = get(fortress);
  const modifiedAssets = currentFortress.assets.map(asset =>
    asset.id === newAsset.id ? newAsset : asset,
  );
  set(fortress, {...currentFortress, assets: modifiedAssets});
});

export const removeAsset = atom(null, (get, set, id: number) => {
  const currentFortress = get(fortress);
  const filteredAssets = currentFortress.assets.filter(
    asset => asset.id !== id,
  );
  set(fortress, {...currentFortress, assets: filteredAssets});
});
