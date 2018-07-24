import { GeoMessage, GeoMessageSchema } from './model/geo-message';

let msg1 = new GeoMessage(-77.037684, 38.898748);

console.log(JSON.stringify(msg1));
console.log(GeoMessageSchema.encode(msg1));