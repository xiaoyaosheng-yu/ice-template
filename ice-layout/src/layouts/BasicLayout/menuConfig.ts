const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/home',
    icon: 'chart-pie',
  },
  {
    name: '商家平台',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '商家列表',
      },
      {
        path: '/seller/detail',
        name: '商家详情',
      },
      {
        path: '/seller/404',
        name: '商家 404',
      },
    ],
  },
  {
    name: '小二后台',
    icon: 'account',
    children: [
      {
        path: '/waiter',
        name: '小二首页',
      },
      {
        path: '/waiter/list',
        name: '列表',
      },
      {
        path: '/waiter/detail',
        name: '详情',
      },
      {
        path: '/waiter/404',
        name: '小二 404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
