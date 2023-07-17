import './App.css';
import React, { useEffect, useState } from 'react';
import Posts from './components/post/Posts';
import PostLoadingComponent from './components/post/PostLoading';


function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = 'http://127.0.0.1:8000/post/';
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	},[setAppState]);
	// useEffect(() => {
	// 	axiosInstance.get().then((res) => {
	// 		const allPosts = res.data;
	// 		console.log(res.data);
	// 		setAppState({ loading: false, posts: allPosts });
	// 		console.log(res.data);
	// 	});
	// }, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;