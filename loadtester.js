import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '5m', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '5m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1000 },
    { duration: '2m', target: 1500 },
    { duration: '5m', target: 1000 },
    { duration: '5m', target: 100 },
  ],
};

export default function() {
  let randomNumber = Math.floor(Math.random() * (1000000 - 1) + 1);
  let response = http.get(`http://localhost:3000/api/reviews/${randomNumber}`);
  check(response, { 'status is 200': (r) =>r.status == 200 });
  sleep(1);
}
