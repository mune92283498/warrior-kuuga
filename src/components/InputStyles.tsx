import { createStyles, makeStyles } from '@material-ui/core/styles';

const kuugaButtonStyle = makeStyles(() =>
  createStyles({
    "whiteKuuga": {
      borderColor: '##ff6768',
      color: '##ff6768',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#ffff',
        color: '#ffff',
      },
    },
    "redKuuga": {
      borderColor: '#dd0a35',
      color: '#dd0a35',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#ffff',
        color: '#ffff',
      },
    },
    "blueKuuga": {
      borderColor: '#003399',
      color: '#003399',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#ffff',
        color: '#ffff',
      },
    },
    "greenKuuga": {
      borderColor: '#2BDE73',
      color: '#2BDE73',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#ffff',
        color: '#ffff',
      },
    },
     "perpleKuuga": {
      borderColor: '#791E94',
      color: '#791E94',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#ffff',
        color: '#ffff',
      },
    },
  })
);

export default kuugaButtonStyle;