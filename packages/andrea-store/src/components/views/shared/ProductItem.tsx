import * as React from 'react';
import { Product } from '@frontend-clean-architecture/shopify-client';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return <div>{product.title}</div>;
}
