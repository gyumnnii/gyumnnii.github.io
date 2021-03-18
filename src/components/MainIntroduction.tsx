import React from 'react';
import { Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainIntroduction: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const introduction = {
  title: 'gyumnnii.io 블로그',
  description: '간단한 소개글\n줄바꿈하면서 잘 넣도록\n세줄 정도로 정리해서 넣자',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
};

const MainIntroduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainIntroduction}
      style={{ backgroundImage: `url(${introduction.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      <img style={{ display: 'none' }} src={introduction.image} alt={introduction.imageText} />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {introduction.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {introduction.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default MainIntroduction;
