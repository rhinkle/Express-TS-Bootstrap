import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";
import TYPES from "../TYPES";
import container from "../container";

@controller('/')
export class HealthCheckController {

    @httpGet('/')
    public async index(req: Request, res: Response) {
        res.json({
            hello: 'world',
        });
    }
}
