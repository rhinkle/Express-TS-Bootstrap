import supertest from "supertest";
import app from "../app";
import { expect } from "@jest/globals";

const request = supertest(app);

test('RouteTest: /', async done => {
    const res: any = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({hello: 'world'});
    done();
});
