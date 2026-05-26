import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import image from './Meeting Room.svg'; 

const HexagonWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '160px',
    clipPath: 'polygon(50% -50%,100% 50%,50% 150%,0 50%)',
    background: 'rgba(172, 172, 172, 0.2)',
    borderColor: 'red',
    cursor: 'pointer',
}));

const Image = styled('img')(() => ({
    width: '100px', 
    height: '80px',
    objectFit: 'cover', 
    marginBottom: '8px', 
}));

const TitleWrapper = styled(Box)(() => ({
    textAlign: 'center',
    marginTop: '10px',
}));

const Meeting = ({ title }) => {
    const handleClickCard = () => {
        // window.open('http://164.52.197.111:3000/dashboard/default');
    };

    return (
        <Box onClick={handleClickCard} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HexagonWrapper>
                <Image src={image} alt="Meeting Image" /> 
            </HexagonWrapper>
            <TitleWrapper>
                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >
                    {title}
                </Typography>
            </TitleWrapper>
        </Box>
    );
};

export default Meeting;
