import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import CustomTable from '../../components/Table';
import Modal from '../../components/Modal';

function LoginPage() {
    return(
        <Layout>
            <h1>Welcome to Financepeer for more detail please Login</h1>
            <CustomTable />
        </Layout>
    );
}

LoginPage.propTypes = {
    classes: PropTypes.object,
  };
  
  function mapStateToProps(state) {
    // const {sendOtp, verifyOtp , sendForgotOtp , resetPassword, allpermissions} = state;
    // return {
    //  sendOtp,
    //  verifyOtp,
    //  sendForgotOtp,
    //  resetPassword,
    //  allpermissions
    // }
  };
  export default connect(mapStateToProps, {
   
  })(LoginPage);