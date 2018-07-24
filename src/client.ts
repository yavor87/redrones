import { createConnection } from 'net';
import { GeoMessage, GeoMessageSchema } from './model/geo-message';

const port: number = Number(process.env.PORT || 3000);

const messages: GeoMessage[] = [
    new GeoMessage(-77.037684, 38.898748),
    new GeoMessage(-77.047684, 38.898748),
    new GeoMessage(-77.037684, 38.899748),
    new GeoMessage(-77.057684, 38.899748),
    new GeoMessage(-77.056684, 38.899748),
];

const client = createConnection({ port: port }, () => {
    // 'connect' listener
    console.log('connected to server!');
    messages.forEach(msg => {
        let data: Buffer = GeoMessageSchema.encode(msg);
        client.write(data);
        console.log(`Message ${JSON.stringify(msg)} sent`);
    });
});

client.on('end', () => {
    console.log('disconnected from server');
});