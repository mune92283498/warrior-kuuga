import React, {useState, useEffect} from 'react';
// import './assets/styles/style';
import { CharactorsList } from './components';

const App = () => {
  const [tribe, setTribe] = React.useState(false);          // リントかグロンギか管理
  const [allCheck, setAllCheck] = React.useState(false);    // 全てのキャラクターを閲覧したか管理
  return (
    <div>
      <CharactorsList />
    </div>
  );
};

export default App;