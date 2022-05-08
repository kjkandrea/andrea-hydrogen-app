import * as React from 'react';
import { useCollections } from './hooks/queries';
import { Collection } from './types';

interface CollectionsControllerProps {
  collection: Collection;
}

export function CollectionsController({ collection }: CollectionsControllerProps) {
  const collections = useCollections(collection);
  console.log(collections);

  return <h1>Collections</h1>;
}
