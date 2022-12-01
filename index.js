// https://stackoverflow.com/questions/55725198/can-you-use-react-server-to-forward-your-request-to-backend

const proxy = require('express-http-proxy');
const app = require('express')();  
app.use('/', proxy('http://localhost:4200/view/', {
    
    skipToNextHandlerFilter: function(proxyRes) {
        console.log("Proxy res code: ", proxyRes.statusCode);
        return proxyRes.statusCode === 404;
    }
}));

app.use('/', proxy('https://phuccaipc:5437/', {

}));
// app.use(express.static("path/to/your/static/assets")); // these were previously served with serve
app.listen(3000, () => console.log("Frontend listening on port: 3000"));