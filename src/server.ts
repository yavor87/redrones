import { GeoMessage, GeoMessageSchema } from './model/geo-message';
import { createServer } from 'net';

const port = process.env.PORT || 3000;

const server = createServer(c => {
    // 'connection' listener
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.on('data', (data) => {
        // TODO: Receive Init message to differentiate each client
        let msg: GeoMessage = GeoMessageSchema.decode(data);
        console.log(JSON.stringify(msg));
        // TODO: Store geo message
    })
});

server.on('error', (err) => {
    throw err;
});
server.listen(port, () => {
    console.log('server bound');
});