import "reflect-metadata";
import container from "../../../container";
import TYPES from "../../../TYPES";
import {ConsoleLogger, NullLogger} from "../console-logger";
import {beforeAll, expect} from "@jest/globals";
import {ILogger} from "../logger";

let subject: NullLogger;

beforeAll(() => {
    const mockContainer = container.createChild();
    mockContainer.bind<ILogger>(TYPES.ConsoleLogger).toConstantValue(ConsoleLogger.createNull());
    subject = mockContainer.get(TYPES.ConsoleLogger);
});

it('Logger Info', async done =>{
    subject.info('LogSomething');
    expect(subject.getLastLogMessage()).toBe('LogSomething');
    done();
});

it('should log.debug 123456',  () => {
    expect.assertions(1);
    subject.debug('12345');
    return expect(subject.getLastLogMessage()).toBe('12345');
});


it('should log.warn 123456',  () => {
    expect.assertions(1);
    subject.warn('12345');
    return expect(subject.getLastLogMessage()).toBe('12345');
});

it('should log.error 123456',  () => {
    expect.assertions(1);
    subject.error('12345');
    return expect(subject.getLastLogMessage()).toBe('12345');
});
