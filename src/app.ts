import "reflect-metadata";
import bodyParser from 'body-parser';
import { InversifyExpressServer } from "inversify-express-utils";
import './controller/health-check';
import container from "./container";

const server =  new InversifyExpressServer(container);

server.setConfig((app) => {
    // config settings
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

const app = server.build();
export default app;
