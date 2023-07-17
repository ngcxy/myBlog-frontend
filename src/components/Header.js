import React, { useState } from 'react';
import { Link as RouterLink} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
// MUI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from 'tss-react/mui';
import axiosInstance from "../axios";

const useStyles = makeStyles()((theme) => {
	return {
		appBar: {
			borderBottom: `1px solid ${theme.palette.divider}`,
			backgroundColor: '#fafafa',
		},
		link: {
			margin: theme.spacing(1, 1.5),
		},
		toolbarTitle: {
			flexGrow: 1,
		},
	};
});

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#ffffff',

	marginRight: theme.spacing(60),
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

function Header(){
	console.log(localStorage.getItem('username'));
	const { classes } = useStyles();
	let history = useHistory();

	// const [data, setData] = useState({ search: '' });
	// const goSearch = (e) => {
	// 	history.push({
	// 		pathname: '/search/',
	// 		search: '?search=' + data.search,
	// 	});
	// 	window.location.reload();
	// };

	if (localStorage.getItem('AccessToken') === undefined
		|| localStorage.getItem('AccessToken') === null ){
		return(
			<React.Fragment>
				<CssBaseline/>
				<AppBar
						position="static"
						color='transparent'
						elevation={0}
						className={classes.appBar}
				>
					<Toolbar className={classes.toolbar}>
						<Typography
							variant="h6"
							color="inherit"
							noWrap
							className={classes.toolbarTitle}
						>
							<Link
								component={NavLink}
								to="/"
								underline="none"
								color="textPrimary"
							>
								Brilliant Blog
							</Link>
						</Typography>
						<nav>
							<Link
								color="textPrimary"
								href="#"
								className={classes.link}
								component={NavLink}
								to="/register"
							>
								Register
							</Link>
						</nav>
						<Button
							href="#"
							color="primary"
							variant="outlined"
							className={classes.link}
							component={NavLink}
							to="/login"
						>
							Login
						</Button>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}
	else {
		if (localStorage.getItem('username') === null){
			axiosInstance.get(`users/list/`).then((res) => {
				const userData = res.data.filter((user) => user.email === localStorage.getItem('email'));
				localStorage.setItem('username', userData[0].username);
				window.location.reload();
				console.log(localStorage);
			})
		}

		return(
			<React.Fragment>
				<CssBaseline/>
				<AppBar
						position="static"
						color='transparent'
						elevation={0}
						className={classes.appBar}
				>
					<Toolbar className={classes.toolbar}>
						<Typography
							variant="h6"
							color="inherit"
							noWrap
							className={classes.toolbarTitle}
						>
							<Link
								component={NavLink}
								to="/"
								underline="none"
								color="textPrimary"
							>
								Brilliant Blog
							</Link>
						</Typography>
						<nav>
							<Link
								color="textPrimary"
								href="#"
								className={classes.link}
								component={NavLink}
								to="/admin"
							>
								Hi, {localStorage.getItem('username')}
							</Link>
						</nav>
						<Button
							href="#"
							color="primary"
							variant="outlined"
							className={classes.link}
							component={NavLink}
							to="/logout"
						>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}
}
export default Header;
