import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

})

interface DialogTitleProps {
  id: string;
  onClose: () => void;
}

const DialogTitle = ((props: DialogTitleProps) => {
  const { onClose } = props;
  return (
    <MuiDialogTitle disableTypography >
      <Typography variant='button'></Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}); 

export const CharactorInfoDialog: React.FC<DialogTitleProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        青いボタン
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
          戦士クウガ詳細情報
          <Button autoFocus onClick={handleClose} color='primary'>
            閉じる
          </Button>
      </Dialog>
    </div>
  );
}

export default CharactorInfoDialog;