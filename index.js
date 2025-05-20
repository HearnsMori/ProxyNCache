const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');

const app = express();
//For https
const proxyAgent = new HttpsProxyAgent('http://localhost:3128'); // Squid Proxy
//For http
const proxyAgent2 = new HttpProxyAgent('http://localhost:3128'); // Squid Proxy

app.use('/proxy', createProxyMiddleware({
    target: 'https://www.google.com', // Target HTTPS site
    changeOrigin: true,
    agent: proxyAgent,
    secure: false, // Ignore SSL certificate issues
}));
app.use('/proxy2', createProxyMiddleware({
    target: 'http://www.example.com', // Target HTTP site
    changeOrigin: true,
    agent: proxyAgent2,
    secure: false, // Ignore SSL certificate issues
}));
app.listen(3000, () => {
    console.log('Web Proxy Server running at http://localhost:3000');
});
