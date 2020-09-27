import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    button: {
      padding: theme.spacing(1),
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: '8px',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: '#ffff',
      },
    },
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

interface Props {
  id?: string;
  forms: string[];
  onClick: () => void;
  onClose: () => void;
}

interface DialogProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = (props: DialogProps) => {
  const { onClose } = props;
  return (
    <MuiDialogTitle>
      <Typography variant='button'>詳細情報</Typography>
      {onClose ? (
        <IconButton aria-label='close' onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}; 

export const Charactor: React.FC<Props> = ({forms}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const clickDialogOpen = () => {
    setOpen(true);
  };
  const clickDialogClose = () => {
    setOpen(false);
  };

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {forms.map((form) => (
              <Button className={classes.button} key={form.toString()} size='large' variant='outlined' color='secondary' onClick={clickDialogOpen}>
                {form}
              </Button>
            ))}
          </Grid>
          <Dialog onClose={clickDialogClose} aria-labelledby='customized-dialog-title'open={open}>
            <DialogTitle id="customized-dialog-title" onClose={clickDialogClose}>
              詳細情報
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="subtitle1">
                フォーム名：
              </Typography>
              <Typography variant="subtitle1">
                碑文内容：
              </Typography>
              <Typography>
                身長：
              </Typography>
              <Typography>
                体重：
              </Typography>
              <Typography>
                パンチ力：
              </Typography>
              <Typography>
                キック力：
              </Typography>
              <Typography>
                必殺技：
              </Typography>
              <Typography>
                オススメシーン：
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={clickDialogClose} color='primary'>
              閉じる
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </div>
    );
};

export default Charactor;