import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const useStyles = makeStyles()((theme) => {
	return{
		cardMedia: {
			paddingTop: '56.25%', // 16:9
		},
		link: {
			margin: theme.spacing(1, 1.5),
		},
		cardHeader: {
			backgroundColor:
				theme.palette.type === 'light'
					? theme.palette.grey[200]
					: theme.palette.grey[700],
		},
		postTitle: {
			fontSize: '16px',
			textAlign: 'left',
		},
		postText: {
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'baseline',
			fontSize: '12px',
			textAlign: 'left',
			marginBottom: theme.spacing(2),
		},
	}
});

const Posts = (props) => {
	const { posts } = props;
	const { classes } = useStyles();
	if (!posts || posts.length === 0 || posts[0] == undefined) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className={classes.card}>
									<Link
										color="textPrimary"
										href={'post/' + post.slug}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image={post.image? post.image : "https://source.unsplash.com/random"}
											// image="https://source.unsplash.com/random"
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.postTitle}
										>
											{post.title.substr(0, 50)}
										</Typography>
										<div className={classes.postText}>
											<Typography color="textSecondary">
												{post.excerpt.substr(0, 40)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
