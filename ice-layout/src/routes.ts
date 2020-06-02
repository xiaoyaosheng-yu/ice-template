import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

const routes = [{
  path: '/',
  exact: true,
  component: Login,
}, {
  path: '/about',
  component: About,
}, {
  path: '/home',
  component: Home,
}, {
  component: NotFound,
}];

export default routes;