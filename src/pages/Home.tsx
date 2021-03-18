import * as React from 'react';
import IntroductionCard from '../components/Introduction/IntroductionCard';
import Footer from '../components/Footer/Footer';
import RecentPosts from '../components/Post/RecentPosts';

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <IntroductionCard />
        <RecentPosts />
      </main>
      <Footer />
    </>
  );
};
export default Home;
