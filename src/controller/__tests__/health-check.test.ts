import supertest from "supertest";
import { expect } from "@jest/globals";
import app from "../../app";
import container from "../../container";
import {Container} from "inversify";
import TYPES from "../../TYPES";

const request = supertest(app);

test('RouteTest: /health-check', async done => {

    const res: any = await request.get('/health-check');

    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({status: 'pass'});
    done();
});
