import supertest from "supertest";
import { expect } from "@jest/globals";
import app from "../../app";

const request = supertest(app);

test('RouteTest: /', async done => {
    const res: any = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({hello: 'world'});
    done();
});
