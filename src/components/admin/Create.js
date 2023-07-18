import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const useStyles = makeStyles()((theme) => {
	return {
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(3),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}
});

export default function Create() {
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}
	//

	const history = useHistory();
	const initialFormData = Object.freeze({
		title: '',
		slug: '',
		excerpt: '',
		content: '',
	});

	const [postData, updateFormData] = useState(initialFormData);
	const [postImage, setPostImage] = useState(null);

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setPostImage({
				image: e.target.files[0]
			});
			console.log(e.target.files);
		}
		if ([e.target.name] == 'title') {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('title', postData.title);
		formData.append('slug', postData.slug);
		formData.append('author', '1');
		formData.append('excerpt', postData.excerpt);
		formData.append('content', postData.content);
		formData.append('image', postImage.image);
		console.log(formData);

		const config = {headers: { 'Content-Type': 'multipart/form-data' } };
		axiosInstance.post(`post/admin/create/`, formData, config);

		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	// const URL = 'http://127.0.0.1:8000/api/admin/creats/';
	// let formData = new FormData();
	// formData.append('title', postData.title);
	// formData.append('slug', postData.slug);
	// formData.append('author', 1);
	// formData.append('excerpt', postData.excerpt);
	// formData.append('content', postData.content);
	// formData.append('image', postimage.image[0]);
	// axios
	// 	.post(URL, formData, config)
	// 	.then((res) => {
	// 		console.log(res.data);
	// 	})
	// 	.catch((err) => console.log(err));

	const { classes } = useStyles();

	const categories = [
  {
    value: '1',
    label: 'SelfMovie',
  },
  {
    value: '2',
    label: 'SelfMusic',
  },
];

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Post
				</Typography>
				<form className={classes.form} noValidate encType="multipart/form-data">
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="post title"
								name="title"
								autoComplete="title"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={postData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								select
								defaultValue = ""
								id="category"
								label="category"
								name="category"
								autoComplete="category"
								onChange={handleChange}
							>
								{categories.map((option) => (
            						<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
          						))}
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="excerpt"
								label="post excerpt"
								name="excerpt"
								autoComplete="excerpt"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="post-image"
							onChange={handleChange}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Post
					</Button>
				</form>
			</div>
		</Container>
	);
}
