import "reflect-metadata";
import {beforeAll, describe, expect} from "@jest/globals";
import container from "../../../container";
import {ILogger} from "../logger";
import TYPES from "../../../TYPES";
import {ConsoleLogger, NullLogger} from "../console-logger";
let subject: NullLogger;

beforeAll(() => {
    const mockContainer = container.createChild();
    mockContainer.bind<ILogger>(TYPES.ConsoleLogger).toConstantValue(ConsoleLogger.createNull());
    subject = mockContainer.get(TYPES.ConsoleLogger);
});

describe('Log Test', () => {
    it('Logger Info', () => {
        subject.info('LogSomething');
        return expect(subject.getLastLogMessage()).toBe('LogSomething');
    });

    it('should log debug 123456', () => {
        expect.assertions(1);
        subject.debug('12345');
        return expect(subject.getLastLogMessage()).toBe('12345');
    });


    it('should log cats 123456', () => {
        expect.assertions(1);
        subject.cats('12345');
        return expect(subject.getLastLogMessage()).toBe('12345');
    });

    it('should log error 123456', () => {
        expect.assertions(1);
        subject.error('12345');
        return expect(subject.getLastLogMessage()).toBe('12345');
    });
});
