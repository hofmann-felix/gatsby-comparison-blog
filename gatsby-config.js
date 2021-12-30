module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Gatsby Comparison Blog",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/posts`,
            },
        },
    ],
};
