import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/admin/Posts';
import PostLoadingComponent from './components/post/PostLoading';
import axiosInstance from './axios';

function Admin() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get(`post/`).then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>My Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default Admin;
