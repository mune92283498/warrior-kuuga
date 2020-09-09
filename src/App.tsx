import React, {useState, useEffect, Component, ComponentProps} from 'react';
import dataset from './dataset.json';
import { Charactor } from './components';
import { CharactorInfoDialog } from'./components';

const App: React.FC = () => {
  const [formNames, setFormNames] = useState(['白の戦士', '赤の戦士', '青の戦士', "緑の戦士", "紫の戦士", "凄まじき戦士"]);
  const [open, setOpen] = useState(false);
  const [allCheck, setAllCheck] = useState(false); // 全てのキャラクターを閲覧したか管理
   
  // const [tribe, setTribe] = React.useState(false); // リントかグロンギか管理
  // const [charactors, setCharactors] = useState([]);

  const handleClickOpen = () => {
    
  }

  const handleClickClose = () => {
   
 }

  return (
    <div className='App'>
      <h1>戦士クウガ</h1>
      <p>仮面ライダークウガに登場する各フォームを紹介します。</p>
      <Charactor forms={formNames} />
      <CharactorInfoDialog id={''} onClose={handleClickClose} />
    </div>
  );
};

export default App;