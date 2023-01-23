import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMusleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
        <Typography variant="h3" mb={5}>
            Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {targetMusleExercises.length ? <HorizontalScrollbar data={targetMusleExercises} /> : <Loader />}
        </Stack>
        <Typography variant="h3" mb={5}>
            Exercises that target the same equipment
        </Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>

    </Box>
  )
}

export default SimilarExercises