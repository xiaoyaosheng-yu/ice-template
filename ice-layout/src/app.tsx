import * as React from 'react';
import { createApp } from 'ice'
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
        entry: 'http://localhost:3334',
      }, {
        path: '/waiter',
        title: '小二平台',
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9 
        entry: 'http://localhost:8080',
      }];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

createApp(appConfig)
