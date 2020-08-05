import {Request, Response} from "express";
import {controller, httpGet} from "inversify-express-utils";
import {inject} from "inversify";
import TYPES from "../TYPES";
import {ILogger} from "../common/logger/logger";

@controller('/health-check')
export class HealthCheckController {

    constructor(
        @inject(TYPES.ConsoleLogger) readonly log: ILogger
    ) { }

    @httpGet('/')
    public async index(req: Request, res: Response): Promise<Response> {
        this.log.info('Request received.');
        res.json({status: 'pass'});
        return res;
    }
}
