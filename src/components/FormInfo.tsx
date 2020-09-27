import { createStyles, makeStyles } from '@material-ui/core/styles';

const formInfo = makeStyles(() =>
  createStyles({
    whiteKuuga: {
      borderColor: '##ff6768',
      color: '##ff6768',
    },
    redKuuga: {
      borderColor: '#dd0a35',
      color: '#dd0a35',
    },
    blueKuuga: {
      borderColor: '#003399',
      color: '#003399',
    },
    greenKuuga: {
      borderColor: '#2BDE73',
      color: '#2BDE73',
    },
    perpleKuuga: {
      borderColor: '#791E94',
      color: '#791E94',
    },
  })
);

export default formInfo;