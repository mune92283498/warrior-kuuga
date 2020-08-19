import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    "button": {
      borderColor: '#FFB549',
      color: "#FFB549",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "light"
      }
    },
  })
));

 const Charactor = (props: any) => {
   const classes = useStyles();
    return (
      <Button
        className={classes.button}
        variant='outlined' onClick={() => props.id}>
        白い戦士
      </Button>
  );
}

export default Charactor;