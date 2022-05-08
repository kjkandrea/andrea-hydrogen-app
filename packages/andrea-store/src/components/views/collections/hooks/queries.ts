import { useQuery } from 'react-query';
import { client } from '../../../../main';
import { Collection } from '../types';

/**
 * TODO
 * collection === 'ALL' 일때
 * client.product.fetchAll 을 받아오는것은 비즈니스 규칙이다.
 * 이를 어떻게 분리해야할까?
 */

export const useCollections = (collection: Collection) =>
  useQuery(['collections', collection], () => {
    return client.product.fetchAll();
  });
