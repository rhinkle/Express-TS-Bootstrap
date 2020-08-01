import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller('/health-check')
export class HealthCheckController {

    @httpGet('/')
    public async index(req: Request, res: Response): Promise<Response> {
        res.json({
            status: 'pass',
        });
        return res;
    }
}
