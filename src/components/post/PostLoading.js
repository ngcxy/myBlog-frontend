import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Loading...
				<br></br>
				(Remind me if content can't be loaded. Supabase pauses database inactive for 30 days.)
			</p>
		);
	};
}
export default PostLoading;