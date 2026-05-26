import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { gridSpacing } from './constant';


import Footfall from './Footfall';
import VMS from './VMS';
import Happy from './Happy';
import Sad from './Sad';


const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);  // eslint-disable-line no-unused-vars

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 1,
                pl: 5,
                mt: 3
            }}>
                <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>
                    Please Give Your Valuable Feedback Here!!
                </Typography>
            </Box>


            <Grid container spacing={gridSpacing} sx={{ paddingRight: 5, paddingLeft: 5 }}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {/* IAQ Card */}
                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ mt: 4 }}>
                            <Happy isLoading={isLoading} />
                        </Grid>

                        {/* Footfall Card */}
                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ mt: 4 }}>
                            <Sad isLoading={isLoading} />
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
