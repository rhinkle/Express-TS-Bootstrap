import {Container} from "inversify";
import {HealthCheckController} from "./controller/health-check";
import TYPES from "./TYPES";
import {ConsoleLogger} from "./common/logger/console-logger";
import {ILogger} from "./common/logger/logger";

const container = new Container();

container.bind<HealthCheckController>(TYPES.HealthCheckController).to(HealthCheckController);
container.bind<ILogger>(TYPES.ConsoleLogger).toConstantValue(ConsoleLogger.create());

export default container;
