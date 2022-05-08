import { useQuery } from 'react-query';
import { client } from '../../../../main';
import { Collection } from '../types';

export const useCollections = (collection: Collection) =>
  useQuery(['collections', collection], () => {
    return client.product.fetchAll();
  });
