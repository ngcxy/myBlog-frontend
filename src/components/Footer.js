import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const useStyles = makeStyles()((theme) => {
	return {
		footer: {
			borderTop: `1px solid ${theme.palette.divider}`,
			marginTop: theme.spacing(8),
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			backgroundColor: '#fafafa',
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(6),
				paddingBottom: theme.spacing(6),
			},
		},
	};
});

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/ngcxy">
				Xinyi Cai 2023
			</Link>
		</Typography>
	);
}

const footers = [

	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

function Footer() {
	const { classes } = useStyles();
	return (
		<React.Fragment>
			<Container component="footer" className={classes.footer}>
				{/*<Grid container spacing={4} justify="space-evenly">*/}
				{/*	{footers.map((footer) => (*/}
				{/*		<Grid item xs={6} sm={3} key={footer.title}>*/}
				{/*			<Typography variant="h6" color="textPrimary" gutterBottom>*/}
				{/*				{footer.title}*/}
				{/*			</Typography>*/}
				{/*			<ul>*/}
				{/*				/!*loop for each items*!/*/}
				{/*				{footer.description.map((item) => (*/}
				{/*					<li key={item}>*/}
				{/*						<Link href="#" variant="subtitle1" color="textSecondary">*/}
				{/*							{item}*/}
				{/*						</Link>*/}
				{/*					</li>*/}
				{/*				))}*/}
				{/*			</ul>*/}
				{/*		</Grid>*/}
				{/*	))}*/}
				{/*</Grid>*/}
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Footer;
