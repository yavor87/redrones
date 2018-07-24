import * as sp from 'schemapack';

export class GeoMessage {
    constructor(public lon: number, public lat: number) { }
}

var messageSchema = sp.build({
    lon: "float32",
    lat: "float32"
});
export { messageSchema as GeoMessageSchema };