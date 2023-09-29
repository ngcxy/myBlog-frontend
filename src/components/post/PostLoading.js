import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Loading...
				<br></br>
				(This might take some time as I'm using free tier supabase!)
			</p>
		);
	};
}
export default PostLoading;