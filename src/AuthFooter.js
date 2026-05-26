
import React from 'react';
import { Typography, Stack } from '@mui/material';

import './Navbar.css';

const AuthFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" className="auth-footer">
            <Typography className="foot" variant="subtitle2" target="_blank">
                WMS <b>©</b> {currentYear}
            </Typography>
            <Typography className="foot" variant="subtitle2" target="_blank" sx={{ ml: 2 }}>
               
                    Developed by Kavya Barki
               
               
            </Typography>

        </Stack>
    );
};

export default AuthFooter;