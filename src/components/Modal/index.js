import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Modal({ children, modalOpen, handleCloseModal }) {

  return (
    <div>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
      >
        {children}
      </Dialog>
    </div>
  );
}


Modal.propTypes = {
    children: PropTypes.node.isRequired,
    handleCloseModal: PropTypes.func,
    modalOpen: PropTypes.bool
  };

