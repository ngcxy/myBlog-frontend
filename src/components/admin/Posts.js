import React from 'react';
// MUI
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';


const useStyles = makeStyles()((theme) => {
	return {
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
	console.log(props);
	const { posts } = props;
	const { classes } = useStyles();
	if (!posts || posts.length === 0 || posts[0] == undefined)
		return (
			<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableBody>
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Post
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
			);

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align="left">Category</TableCell>
									<TableCell align="left">Title</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{posts.map((post) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{post.id}
											</TableCell>
											<TableCell align="left">{post.category}</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/post/' + post.slug}
													className={classes.link}
												>
													{post.title}
												</Link>
											</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + post.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + post.id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Post
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
