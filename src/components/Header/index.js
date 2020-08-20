import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Modal from '../Modal';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({}) {
  const classes = useStyles();
  const [modalOpen, setModal] = React.useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleEmail = () => {

  }

  const handlePassword = () => {

  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Financepeer 
          </Typography>
          <Button onClick={handleModalOpen} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Modal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      >
        <DialogTitle id="alert-dialog-slide-title">{modalOpen ? "Login Here": "Register Here"}</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="email"
            onChange={handleEmail}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={handlePassword}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Login
          </Button>
        </DialogActions>
      </Modal>
    </div>
  );
}