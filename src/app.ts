import "reflect-metadata";
import bodyParser from 'body-parser';
import { InversifyExpressServer } from "inversify-express-utils";
import './controller/health-check';
import {Container} from "inversify";
import e from "express";

export class App {
    private _server: InversifyExpressServer;

    constructor(container: Container) {
        this._server =  new InversifyExpressServer(container);
        this.config();
    }

    public build(): e.Application {
        return this._server.build();
    }

    private config() {
        this._server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
        });
    }
}
