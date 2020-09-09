import React from 'react';
import { CharactorState } from '../types';
import Button from '@material-ui/core/Button';
import InputStyles from './InputStyles';

interface Props {
  forms: string[];
}

const Charactor: React.FC<Props> = ({ forms }) => (
  <div>
    {forms.map((form) => (
      <ul>
        <li>
          <button>{form}</button>
        </li>
      </ul>
    ))}
  </div>
);

export default Charactor;