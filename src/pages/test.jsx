import { Box } from '@mui/material'
import React from 'react'

function test() {
  return (
    <Box sx={{ width: '100vw',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: 'red'
    }}>
        <Box    sx={{
            width: '50%',
            height: '100%',
            backgroundColor: 'yellow',
        }}/>
            <Box sx={{width: '50%',
            height: '100%',
            backgroundColor: 'blue'
            }}/>

        
    </Box>
  );
};

export default test