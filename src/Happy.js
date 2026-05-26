import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import image from './happy.webp'; // Make sure the path is correct

// Styled wrapper for circular image container
const HexagonWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '400px',
    background: 'rgba(172, 172, 172, 0.2)',
    borderRadius: '50%',
    cursor: 'pointer',
}));

// Styled image inside the container
const Image = styled('img')(() => ({
    width: '400px',
    height: '400px',
    objectFit: 'cover',
}));

// Title below the image
const TitleWrapper = styled(Box)(() => ({
    textAlign: 'center',
    marginTop: '10px',
}));

const Happy = ({ title }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClickCard = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    return (
        <>
            <Box
                onClick={handleClickCard}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <HexagonWrapper>
                    <Image src={image} alt="Happy Image" />
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

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}  // <-- changed here
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Thank you for your feedback!
                </Alert>
            </Snackbar>

        </>
    );
};

export default Happy;



