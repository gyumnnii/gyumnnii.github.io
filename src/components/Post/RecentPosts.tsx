import React from 'react';
import { Grid } from '@material-ui/core';
import PostCard from './PostCard';

const featuredPosts = [
  {
    title: '테스트 제목1',
    date: '2021.03.18',
    description: '최근 게시물 테스트입니다',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: '테스트 제목2',
    date: '2021.03.18',
    description: '최근 게시물 테스트입니다.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const RecentPosts = (): JSX.Element => {
  return (
    <>
      <div style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 25, marginTop: 10 }}>
        Recent Posts
      </div>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </Grid>
    </>
  );
};
export default RecentPosts;
