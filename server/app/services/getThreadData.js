const axios = require("axios");

const getThreadData = async (id) => {
	try {
		const post = await getPost(id);
		const comments = await getComments(id);
		const thread = {
			post: post,
			comments: comments,
		};
		return thread;
	} catch (error) {
		throw error;
	}
};

const getPost = async (id) => {
	try {
		const postRequest = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
		);
		return postRequest.data;
	} catch {
		let error = new Error("Post not found");
		error.status = 400;
		throw error;
	}
};

const getComments = async (id) => {
	try {
		const commentsRequest = await axios.get(
			"https://jsonplaceholder.typicode.com/comments",
		);
		const comments = commentsRequest.data.filter((comment) => {
			return comment.postId == id;
		});
		return comments;
	} catch {
		let error = new Error("Failed to get the commentaries from this post");
		error.status = 500;
		throw error;
	}
};

module.exports = { getThreadData };
