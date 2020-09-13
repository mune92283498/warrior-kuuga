import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InputStyles from './InputStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    button: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  })
);

interface Props {
  id?: string;
  forms: string[];
  onClick: () => void;
  onClose: () => void;
}

const DialogTitle = (props: Props) => {
  const { onClose } = props;
  return (
    <MuiDialogTitle disableTypography>
      <Typography variant='button'></Typography>
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div className={classes.root}>
        <Grid container spacing={3}></Grid>
          <Grid item xs={12} sm={6}>
            {forms.map((form) => (
              <Button variant='outlined' color='secondary' onClick={handleClickOpen}>
                {form}
              </Button>
            ))}
          </Grid>
          <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
            戦士クウガ詳細情報
            <Button autoFocus onClick={handleClose} color='primary'>
              閉じる
            </Button>
          </Dialog>
        <Grid />
      </div>
    );
};

export default Charactor;