import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';


export default function Layout({ children }) {
    return(
        <>
            <Header/>
            <Grid
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item>
                    <Container>
                        {children}
                    </Container>
                </Grid>

            </Grid>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}