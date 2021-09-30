import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from './News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=04b4753abcea4f6a83a2964355409f3a')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                articles.length === 0 ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
              :
              <Grid container spacing={{ xs: 2, md: 3 }}   columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                     </Grid>)
                }
            </Grid>
            }
        </Box>
    );
};

export default Newspaper;