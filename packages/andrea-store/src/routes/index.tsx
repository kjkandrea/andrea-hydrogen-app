import { CollectionsController } from '../components/views/collections/CollectionsController';

export default [
  {
    path: '/',
    children: [
      // 메인
      { index: true, element: <CollectionsController collection="ALL" /> },
    ],
  },
  {
    path: '/collections/all',
    element: <CollectionsController collection="ALL" />,
  },
];
