import React, { ComponentProps } from 'react';
import { CharactorState, CharactorsListState } from '../types';
import { Charactor } from './index';

// type buttonProps = ComponentProps<typeof Charactor>;
type CharactorsListProps = CharactorsListState;

const CharactorsList: React.FC<CharactorsListProps> = (props) => {
  return(
    <div>
      {props.charactors.map((charactor: CharactorState) => (
        <Charactor
          key={charactor.id}
          id={charactor.id}
          content={charactor.content}
        />
      ))}
    </div>
  )
};

export default CharactorsList;
