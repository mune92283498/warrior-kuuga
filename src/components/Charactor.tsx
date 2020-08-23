import React from 'react';
import { CharactorState } from '../types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderColor: '#000000',
      color: '#000000',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
  })
);

const classes = useStyles();

const Charactor: React.FC<CharactorState> = props =>{
 return (
    <Button className={classes.button} variant='outlined'>
      {props.content}
    </Button>
  )};

export default Charactor;