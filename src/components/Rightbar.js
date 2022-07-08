import React from 'react';
import { Box, Typography, AvatarGroup, Avatar,ImageList,ImageListItem } from '@mui/material';

const Rightbar = () => {
    const itemData = [        
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        }
      ];
    return (
        <Box flex={2} p={2} sx={{ display:{xs:"none", sm: "block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} mb={1}>Online Friends</Typography>
                <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co/7YJ2Jch/profile.png" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2} >Latest Photos</Typography>
                <ImageList gap={5} cols={3} rowHeight={100}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>

            </Box>
        </Box>
    );
};

export default Rightbar;