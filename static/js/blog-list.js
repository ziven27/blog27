var blogList = [
	[
		"css-reset",
		"2015_10_12"
	],
	[
		"css-reset2",
		"2015_10_12"
	]
];

function getUrlByBlogId(blogId) {
	blogId = parseInt(blogId);
	var it = blogList[blogId];
	var url = 'blog/' + it[0] + '.html';
	return url;
}
