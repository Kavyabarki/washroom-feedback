import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import image from './Sad-face.png';

const HexagonWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '400px',
    background: 'rgba(172, 172, 172, 0.2)',
    borderColor: 'red',
    cursor: 'pointer',
    borderRadius: '50%',
}));

const Image = styled('img')(() => ({
    width: '440px',
    height: '440px',
    objectFit: 'cover',
}));

const TitleWrapper = styled(Box)(() => ({
    textAlign: 'center',
    marginTop: '10px',
}));

const Sad = ({ title }) => {
    const navigate = useNavigate();

    const handleClickCard = () => {
        navigate('/home'); // or whatever your route is
    };

    return (
        <Box onClick={handleClickCard} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HexagonWrapper>
                <Image src={image} alt="Sad Image" />
            </HexagonWrapper>
            <TitleWrapper>
                <Typography
                    sx={{
                        fontSize: '18px',
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

export default Sad;
