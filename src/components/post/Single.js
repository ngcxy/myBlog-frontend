import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
//MUI
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme) => {
	return{
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
	    },
    }
});

export default function Post() {
	const { slug } = useParams();
	const { classes } = useStyles();

	const [data, setData] = useState({
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get('post/' + slug).then((res) => {
			setData({
				posts: res.data,
			});
			console.log(res.data);
		});
	}, [setData]);

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}> </div>{' '}
			<div className={classes.heroContent}>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						style={{whiteSpace: 'pre-line'}}
						gutterBottom
					>
						{data.posts.title}{' '}
					</Typography>{' '}
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						style={{whiteSpace: 'pre-line'}}
						paragraph
					>
						{data.posts.excerpt}{' '}
					</Typography>{' '}
					<Typography
						variant="subtitle1"
						align="inherit"
						color="textPrimary"
						style={{whiteSpace: 'pre-line'}}
						paragraph
					>
						{data.posts.content}{' '}
					</Typography>{' '}
				</Container>{' '}
			</div>{' '}
		</Container>
	);
}
