import * as React from 'react';
import MainIntroduction from '../components/MainIntroduction';
import Footer from '../components/Footer';
import RecentPosts from '../components/RecentPosts';

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <MainIntroduction />
        <RecentPosts />
      </main>
      <Footer />
    </>
  );
};
export default Home;
