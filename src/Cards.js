import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import MainCard from './MainCard';
import VMSImage from './VMS.png'; // Adjust the path to your image

const CardWrapper = styled(MainCard)(() => ({
    backgroundColor: 'white',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    height: '420px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer', // Makes the card appear clickable
}));

const VMS = ({ title }) => {
    const handleClickCard = () => {
        // Redirect to the specified URL when the card is clicked
        window.open('https://sales.smartdigibuild.com/vms/home?q=dm1zJmNJZD02NmYyNGEyYmFmZDE3N2NkNmEwMTc1ZGQmbGlkPTY2ZjI1NDEyOTczY2FkOGNlYTg4MzU2Zg==', '_blank');
    };

    return (
        <CardWrapper border={false} content={false} onClick={handleClickCard}>
            <Box sx={{ p: 2.25, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: 'black', fontSize: '25px', mb: 1, textAlign: 'center', fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -4 }}>
                    <img
                        src={VMSImage}
                        alt="VMS"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '350px',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
            </Box>
        </CardWrapper>
    );
};

export default VMS;
