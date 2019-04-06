const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/' || req.url === '/home.html') {
        fs.readFile(path.join(__dirname, 'hw4', 'home.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/gallery.html') {
        fs.readFile(path.join(__dirname, 'hw4', 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/contact.html') {
        fs.readFile(path.join(__dirname, 'hw4', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/PIC/1.jpg') {
        fs.readFile(path.join(__dirname, 'hw4', 'PIC', '1.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });

    } else if (req.url === '/PIC/11.jpg') {
        fs.readFile(path.join(__dirname, 'hw4', 'PIC', '11.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/PIC/22.jpg') {
        fs.readFile(path.join(__dirname, 'hw4', 'PIC', '22.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/PIC/33.jpg') {
        fs.readFile(path.join(__dirname, 'hw4', 'PIC', '33.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/PIC/44.jpg') {
        fs.readFile(path.join(__dirname, 'hw4', 'PIC', '44.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'hw4', 'style.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/data.js') {
        fs.readFile(path.join(__dirname, 'hw4', 'data.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else {
        fs.readFile(path.join(__dirname, 'hw4', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});