import React, {useState, useEffect} from 'react';
import './assets/styles/style';

type Props = {
  id: string;
}
const App: React.FC<Props> = (props: Props) => {
  const [tribe, setTribe] = React.useState(false);          // リントかグロンギか管理
  const [allCheck, setAllCheck] = React.useState(false);    // 全てのキャラクターを閲覧したか管理
  return <>{}</>;
};

export default App;