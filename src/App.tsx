import React, {useState, useEffect, Component, ComponentProps} from 'react';
// import './assets/styles/style';
import { CharactorsList, Charactor } from './components';

type Props = ComponentProps<typeof CharactorsList>;

const [charactors, setCharactors] = useState([]);         // 
const [tribe, setTribe] = React.useState(false);          // リントかグロンギか管理
const [allCheck, setAllCheck] = React.useState(false);    // 全てのキャラクターを閲覧したか管理


const App: React.FC<Props> = ()=> (
  <>
    <CharactorsList />
  </>
)

export default App;