import {Fortress, Haven, Vault} from '../types/types';

import {atom} from 'jotai';

const emptyFortress: Fortress = {
  id: 0,
  alias: '',
  release: {lastModified: '', version: 0},
  assets: [],
};

export const fortressAtom = atom(emptyFortress);

export const aliasAtom = atom(
  get => get(fortressAtom).alias,
  (get, set, newAlias: string) =>
    set(fortressAtom, {...get(fortressAtom), alias: newAlias}),
);

export const assetsAtom = atom(get => get(fortressAtom).assets);

export const addAssetAtom = atom(null, (get, set, newAsset: Haven | Vault) => {
  const currentFortress = get(fortressAtom);
  set(fortressAtom, {
    ...currentFortress,
    assets: [...currentFortress.assets, newAsset],
  });
});

export const editAssetAtom = atom(null, (get, set, newAsset: Haven | Vault) => {
  const currentFortress = get(fortressAtom);
  const modifiedAssets = currentFortress.assets.map(asset =>
    asset.id === newAsset.id ? newAsset : asset,
  );
  set(fortressAtom, {...currentFortress, assets: modifiedAssets});
});

export const removeAssetAtom = atom(null, (get, set, id: number) => {
  const currentFortress = get(fortressAtom);
  const filteredAssets = currentFortress.assets.filter(
    asset => asset.id !== id,
  );
  set(fortressAtom, {...currentFortress, assets: filteredAssets});
});
