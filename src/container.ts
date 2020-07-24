import { Container } from "inversify";
import { HealthCheckController } from "./controller/health-check";
import TYPES from "./TYPES";

const container = new Container();

container.bind<HealthCheckController>(TYPES.HealthCheckController).to(HealthCheckController);

export default container;
