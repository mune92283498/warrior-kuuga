import React, {useState, useEffect, Component, ComponentProps} from 'react';
import dataset from './dataset.json';
import { CharactorsList, Charactor } from './components';

// type Props = ComponentProps<typeof CharactorsList>;

// 一気にやろうとせず、一つ一つ撃破していく
// まずはボタンを表示させるところから初めてみる
const App: React.FC = () => {
  // const [charactors, setCharactors] = useState([]);
  // const [tribe, setTribe] = React.useState(false); // リントかグロンギか管理
  // const [allCheck, setAllCheck] = React.useState(false); // 全てのキャラクターを閲覧したか管理

  return (
    <div className='App'>
      <h1>戦士クウガ</h1>
    </div>
  );
};

export default App;