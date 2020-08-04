import supertest from "supertest";
import { expect } from "@jest/globals";
import app from "../../app";

const request = supertest(app);

test('RouteTest: /health-check', async done => {
    const res: any = await request.get('/health-check');
    expect(res.body).toStrictEqual({status: 'pass'});
    expect(res.status).toBe(200);
    done();
});
