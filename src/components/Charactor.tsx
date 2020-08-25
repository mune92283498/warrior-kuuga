import React from 'react';
import { CharactorState } from '../types';
import Button from '@material-ui/core/Button';
import InputStyles from './InputStyles';

// いったん同じようにコーディングして、改めてデータの流れや処理を参考にして再度理解する
const classes = InputStyles();

const Charactor: React.FC<CharactorState> = (props) =>{
 return (
   <Button className={classes.whiteKuuga} variant='outlined' onClick={()=> props.id}>
     {props.name}
   </Button>
 );};

export default Charactor;