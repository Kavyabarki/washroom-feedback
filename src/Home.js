import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gridSpacing } from './constant';

import IAQ from './IAQ';
import Footfall from './Footfall';
import VMS from './VMS';
import PMS from './PMS';
import Asset from './Asset';
import Face from './Face';
import Way from './Way';
import Washroom from './Washroom';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCheckboxChange = (key) => (event) => {
    setSelectedItems((prev) => ({
      ...prev,
      [key]: event.target.checked,
    }));
  };

  const handleSubmit = () => {
    const selected = Object.keys(selectedItems).filter((key) => selectedItems[key]);
    console.log('Selected Feedback:', selected);
    setSnackbarOpen(true);

    // Navigate to dashboard after 3 seconds (snackbar autoHideDuration)
    setTimeout(() => {
      navigate('/'); // change '/dashboard' to your actual dashboard route
    }, 3000);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
          mt: 3,
        }}
      >
        {/* Optional header */}
      </Box>

      <Grid container spacing={gridSpacing} sx={{ px: 5 }}>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <VMS title="Wash Basin" isLoading={isLoading} checked={selectedItems.vms} onChange={handleCheckboxChange('vms')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <Footfall title="Commode" isLoading={isLoading} checked={selectedItems.footfall} onChange={handleCheckboxChange('footfall')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <IAQ title="No Toilet Paper" isLoading={isLoading} checked={selectedItems.iaq} onChange={handleCheckboxChange('iaq')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <PMS title="Slippery Floor" isLoading={isLoading} checked={selectedItems.pms} onChange={handleCheckboxChange('pms')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <Asset title="Waterjet" isLoading={isLoading} checked={selectedItems.asset} onChange={handleCheckboxChange('asset')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <Face title="Mirror" isLoading={isLoading} checked={selectedItems.face} onChange={handleCheckboxChange('face')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <Way title="Unpleasant Smell" isLoading={isLoading} checked={selectedItems.way} onChange={handleCheckboxChange('way')} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ mt: 2 }}>
          <Washroom title="Bin Overflowing" isLoading={isLoading} checked={selectedItems.washroom} onChange={handleCheckboxChange('washroom')} />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
