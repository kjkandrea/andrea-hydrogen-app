import * as React from 'react';
import { useCollections } from './hooks/queries';
import { Collection } from './types';
import { ProductItem } from '../shared/ProductItem';

interface CollectionsControllerProps {
  collection: Collection;
}

export function CollectionsController({ collection }: CollectionsControllerProps) {
  const { data: products } = useCollections(collection);
  if (!products) return <></>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
}
