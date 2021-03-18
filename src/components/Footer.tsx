import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import { GitHub, Instagram, Mail } from '@material-ui/icons';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        gyumnnii.io
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'lightgray',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
}));

const contactUrl = {
  mail: 'mailto::gogumasei@gmail.com',
  github: 'https://github.com/gyumnnii',
  instagram: 'https://www.instagram.com/choii96_825/',
};

const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="center">
          <Grid item xs={1}>
            <Mail />
          </Grid>
          <Grid item xs={1}>
            <GitHub />
          </Grid>
          <Grid item xs={1}>
            <Instagram />
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
};
export default Footer;
