import { Tooltip, IconButton, Fab,  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const Add = () => {
    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left:{xs:"cal(48%)", md:30}}}>
            <IconButton>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            </IconButton>
            </Tooltip>
        </>
    );
};

export default Add;