/**
 * TODO
 * collection === 'ALL' 일때
 * client.product.fetchAll 을 받아오는것은 비즈니스 규칙이다.
 * 이를 어떻게 분리해야할까?
 */
export const collectionTypeMap = {
  ALL: 'ALL',
} as const;

export type Collection = keyof typeof collectionTypeMap;
