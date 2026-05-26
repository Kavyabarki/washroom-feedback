import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import MainCard from './MainCard';
import MeetingImage from './work.png'; // Adjust the path to your image

const CardWrapper = styled(MainCard)(() => ({
    backgroundColor: 'white',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    height: '420px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer', // Makes the card appear clickable
}));

const Meeting = ({ title }) => {
    return (
        <a href="http://164.52.197.111:3006/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <CardWrapper border={false} content={false}>
                <Box sx={{ p: 2.25, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'black', fontSize: '25px', mb: 1, textAlign: 'center', fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -4 }}>
                        <img src={MeetingImage} alt="Indoor Air Quality" style={{ maxWidth: '100%', maxHeight: '350px', objectFit: 'cover' }} />
                    </Box>

                </Box>
            </CardWrapper>
        </a>
    );
};

export default Meeting;
