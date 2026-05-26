import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Checkbox } from '@mui/material';
import image from './toilet.png';

const HexagonWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '160px',
    background: 'rgba(172, 172, 172, 0.2)',
}));

const Image = styled('img')(() => ({
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '8px',
}));

const TitleWrapper = styled(Box)(() => ({
    textAlign: 'center',
    marginTop: '10px',
}));

const Footfall = ({ title, checked, onChange }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HexagonWrapper>
                <Image src={image} alt="Footfall Image" />
            </HexagonWrapper>
            <TitleWrapper>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Checkbox checked={checked} onChange={onChange} />
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
                        {title}
                    </Typography>
                </Box>
            </TitleWrapper>
        </Box>
    );
};

export default Footfall;
