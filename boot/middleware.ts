// eslint-disable-next-line import/no-extraneous-dependencies
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { MMKV } from "react-native-mmkv"

const storage = new MMKV({ id: 'middleware' });

export const clientStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

export const clientPersister = createSyncStoragePersister({ storage: clientStorage })