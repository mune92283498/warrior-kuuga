import React from 'react';
import { CharactorState } from '../types';
import Button from '@material-ui/core/Button';
import InputStyles from './InputStyles';

// Buttonではなく、ChatbotのListItemで各フォームを表現する
// いったん同じようにコーディングして、改めてデータの流れや処理を参考にして再度理解する
// まず、ListItemをMaterial-UIからimportしてきて、利用するところから作業する


const classes = InputStyles();

const Charactor: React.FC<CharactorState> = (props) =>{
 return (
   <Button className={classes.whiteKuuga} variant='outlined'>
     {props.content}
   </Button>
 );};

export default Charactor;