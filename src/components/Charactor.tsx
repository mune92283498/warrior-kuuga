import React from 'react';
import { CharactorState } from '../types';
import Button from '@material-ui/core/Button';
import InputStyles from './InputStyles';

const classes = InputStyles();

const Charactor: React.FC<CharactorState> = (props) =>{
 return (
   <Button className={classes.whiteKuuga} variant='outlined'>
     {props.name}
   </Button>
 );};

export default Charactor;