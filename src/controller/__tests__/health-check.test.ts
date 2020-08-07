import { expect } from "@jest/globals";
import {App} from "../../app";
import {Container} from "inversify";
import {HealthCheckController} from "../health-check";
import TYPES from "../../TYPES";
import supertest = require("supertest");
import {ILogger} from "../../common/logger/logger";
import {ConsoleLogger, NullLogger} from "../../common/logger/console-logger";

test('RouteTest: /health-check', async done => {
    //This is for route tests. Any other test not using supertest wont need this.
    const childContainer = new Container();
    childContainer.bind<HealthCheckController>(TYPES.HealthCheckController).to(HealthCheckController);
    childContainer.bind<ILogger>(TYPES.ConsoleLogger).toConstantValue(ConsoleLogger.createNull());

    const app = new App(childContainer).build();
    const request = supertest(app);

    const res: any = await request.get('/health-check');
    expect(res.body).toStrictEqual({status: 'pass'});
    expect(res.status).toBe(200);

    const logger = childContainer.get<NullLogger>(TYPES.ConsoleLogger);
    expect(logger.getLastLogMessage()).toBe('Request received.');

    done();
});
