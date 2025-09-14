module.exports = {
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: '/',
    httpNodeRoot: '/api',
    userDir: './user',
    nodesDir: './nodes',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$zZJ6u9Kj5bLXq7YkUfNQ5eVHvM9pZnSdIcFwP0BhC2tEiOgJ6Km1K", // password: "admin123"
            permissions: "*"
        }]
    },
    https: false,
    functionGlobalContext: {}
};