import React from 'react';
import { CharactorState } from '../types';
import Button from '@material-ui/core/Button';
import InputStyles from './InputStyles';

// const classes = InputStyles();

// const Charactor: React.FC<CharactorState> = (props) =>{
//  return (
//    <Button className={classes.whiteKuuga} variant='outlined'>
//      {props.name}
//    </Button>
//  );};

type Props = {
  forms: string[];
}

const Charactor: React.FC<Props> = ({ forms }) => (
  <div>
    {forms.map((form) => (
      <button>{form}</button>
    ))}
  </div>
);

export default Charactor;