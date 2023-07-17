import React, { useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		console.log(localStorage.getItem('RefreshToken'));
		console.log(localStorage.getItem('AccessToken'));
		axiosInstance
			.post('api/token/blacklist/', {
					refresh: localStorage.getItem('RefreshToken'),
			})
			.then((res) =>{
				console.log(res.data);
				localStorage.removeItem('AccessToken');
				localStorage.removeItem('RefreshToken');
				localStorage.removeItem('username');
				axiosInstance.defaults.headers['Authorization'] = null;
				window.location.href = '/';		// need a successfully-logout page
			});
	});
	return <div>Logout</div>;
}