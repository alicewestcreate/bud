import { Typography } from '@mui/material';
import React from 'react';

const QuestionHeading = ({question}) => {
    return (
        <Typography variant="h1" textAlign="left" lineHeight={1.3}>
          {question}
        </Typography>
    );
}

export default QuestionHeading;
