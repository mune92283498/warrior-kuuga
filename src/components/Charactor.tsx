import React from 'react';
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

type Props = {
  warrior: {
    id: string;
    content: string;
  }
}

const Charactor: React.FC<Props> = ({ warrior }) =>
  (
    <Button
      className={classes.button}
      variant='outlined'>
      {warrior.content}
    </Button>
  );

export default Charactor;