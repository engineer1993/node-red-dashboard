module.exports = {
    uiPort: process.env.PORT || 1880,
    bindAddress: '0.0.0.0',
    httpAdminRoot: '/',
    httpNodeRoot: '/api',
    userDir: './user',
    nodesDir: './nodes',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "admin123", // Password: admin123
            permissions: "*"
        }]
    },
    https: false,
    functionGlobalContext: {},
    trustProxy: true  // 👈 CRITICAL FOR RENDER.COM PROXY
};
