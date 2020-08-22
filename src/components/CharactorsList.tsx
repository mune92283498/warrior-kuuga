import React, { ComponentProps } from 'react';
import { Charactor } from './index';

type buttonProps = ComponentProps<typeof Charactor>;

const CharactorsList: React.FC<buttonProps> = ({ warrior: Charactor }) => (
  <div>
    <Charactor />
  </div>
)

export default CharactorsList;
