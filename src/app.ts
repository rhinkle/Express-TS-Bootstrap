import "reflect-metadata";
import bodyParser from 'body-parser';
import { InversifyExpressServer } from "inversify-express-utils";
import './controller/health-check';
import container from "./container";

let server =  new InversifyExpressServer(container);

server.setConfig((app) => {
    // config settings
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
export default app;
