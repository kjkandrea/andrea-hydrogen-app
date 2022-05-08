import { Collections } from '../components/views/collections/Collections';

export default [
  {
    path: '/',
    children: [
      // 메인
      { index: true, element: <Collections /> },
    ],
  },
  {
    path: '/abc',
    element: <Collections />,
  },
];
