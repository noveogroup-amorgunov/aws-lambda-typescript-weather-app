import axios from 'axios';
import { HttpEventRequest, HttpResponse, HttpResponseBody, WeatherstackResponse } from './types';

const API_KEY = process.env.WEATHERSTACK_API_KEY;

export function respondJson(body: object, statusCode: number) {
    return {
        statusCode,
        body: JSON.stringify(body)
    };
}

export async function handler(event: HttpEventRequest<{ city: string }>): HttpResponse {
    const { city } = event.pathParameters;

    const endpoint = 'http://api.weatherstack.com/current';
    const { data } = await axios.get<WeatherstackResponse>(endpoint, {
        params: { access_key: API_KEY, query: city }
    });

    if ('error' in data) {
        return respondJson({ error: true }, 200);
    }

    const response: HttpResponseBody = {
        city: data.location.name,
        temperature: data.current.temperature,
        textWeather: data.current.weather_descriptions,
    }

    return respondJson(response, 200);
}
