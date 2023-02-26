import http from 'k6/http';
import { check } from 'k6';

//smoke teste
export const options = {
    vus: 100,
    duration: '1m',
    thresholds: {
        check: ['rate > 0.05']
    }
}

export default function () {
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const resp = http.get( BASE_URL);

    check(resp, {
        'status code 200' : (r) => r.status ===200
    });
    
}