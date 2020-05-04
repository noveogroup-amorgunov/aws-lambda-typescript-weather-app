import axios from 'axios';
import { handler, respondJson } from '../getWeather';
import { httpEventMock } from './mocks/httpEventMock';
import { weatherstackSuccessResponse } from './mocks/weatherstackSuccessResponse';
import { weatherstackErrorResponse } from './mocks/weatherstackErrorResponse';

const defaultEvent = {
    ...httpEventMock,
    pathParameters: { city: 'london' },
} as any;

beforeEach(() => {
    jest.clearAllMocks();
});

describe('getWeather handler', () => {
    it('should respond current weather by city', async () => {
        const requestSpy = jest
            .spyOn(axios, 'get')
            .mockImplementation(async () => ({ data: weatherstackSuccessResponse }));

        const actual = await handler(defaultEvent);
        const expected = respondJson({
            city: 'Lakefront Airport',
            temperature: 22,
            textWeather: ['Clear']
        }, 200);

        expect(actual).toEqual(expected);
        expect(requestSpy).toHaveBeenCalled();
    });

    it('should respond error if weatherstack API respond error', async () => {
        const requestSpy = jest
            .spyOn(axios, 'get')
            .mockImplementation(async () => ({ data: weatherstackErrorResponse }));

        const actual = await handler(defaultEvent);
        const expected = respondJson({ error: true }, 200);

        expect(actual).toEqual(expected);
        expect(requestSpy).toHaveBeenCalled();
    });
});
