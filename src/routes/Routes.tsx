import { Route, Router } from '@solidjs/router';
import Contact from '../pages/contact/Contact';
import NotFoundError from '../pages/error/NotFoundError';
import Home from '../pages/home/Home';
import PostDetail from '../pages/post/post-detail/PostDetail';
import PostList from '../pages/post/post-list/PostList';

export const MainRoutes = () => {
  return (
    <Router>
      {/* 홈 */}
      <Route path={'/'} component={Home} />
      {/* 연락처 */}
      <Route path={'/contact'} component={Contact} />
      {/* 게시물 */}
      <Route path={'/post'}>
        <Route path={'/list/:listNum'} component={PostList} />
        <Route path={'/detail/:postNum'} component={PostDetail} />
        <Route path={'*'} component={NotFoundError} />
      </Route>
      {/* 404 NOT FOUND */}
      <Route path={'*'} component={NotFoundError} />
    </Router>
  );
};
