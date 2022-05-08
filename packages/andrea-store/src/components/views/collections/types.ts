export const collectionTypeMap = {
  ALL: 'ALL',
} as const;

export type Collection = keyof typeof collectionTypeMap;
