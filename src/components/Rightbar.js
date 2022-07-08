import React from 'react';
import { Box, Typography, AvatarGroup, Avatar } from '@mui/material';

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display:{xs:"none", sm: "block"}}}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co/7YJ2Jch/profile.png" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </AvatarGroup>
            </Box>
        </Box>
    );
};

export default Rightbar;