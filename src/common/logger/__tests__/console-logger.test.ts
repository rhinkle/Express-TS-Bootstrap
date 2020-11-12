import "reflect-metadata";
import {beforeAll, describe, expect} from "@jest/globals";
import container from "../../../container";
import {ILogger} from "../logger";
import TYPES from "../../../TYPES";
import {ConsoleLogger, NullLogger} from "../console-logger";
import Mock = jest.Mock;
import SpyInstance = jest.SpyInstance;

let subject: ConsoleLogger;
let subjectSpy: SpyInstance;

beforeAll(() => {
    const mockContainer = container.createChild();
    // Here we want to use the real production logic instead of using NullableConsoleLogger
    // In other files like a service that uses the logger, you would use NullableConsoleLogger
    mockContainer.bind<ILogger>(TYPES.ConsoleLogger).toConstantValue(ConsoleLogger.create());
    subject = mockContainer.get(TYPES.ConsoleLogger);
    subjectSpy = jest.spyOn(console,'log').mockImplementation(() => {
        // do nothing.
    });
});

afterEach(() => {
    jest.resetAllMocks();
})

describe('Log Test', () => {
    it('Logger Info', () => {
        subject.info('LogSomething');
        return expect(subjectSpy.mock.calls[0][0]).toBe('LogSomething');
    });

    it('should log debug 123456', () => {
        expect.assertions(1);
        subject.debug('12345');
        return expect(subjectSpy.mock.calls[0][0]).toBe('12345');
    });

    it('should log cats 12345', () => {
        expect.assertions(1);
        subject.cats('54321');
        return expect(subjectSpy.mock.calls[0][0]).toBe('54321');
    });

    it('should log error 123456', () => {
        expect.assertions(1);
        subject.error('12345');
        return expect(subjectSpy.mock.calls[0][0]).toBe('12345');
    });
});
