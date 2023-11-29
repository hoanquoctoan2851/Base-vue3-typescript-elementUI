import requestHttp from '@/api/config';

function login(data: any) {
  return requestHttp({
    url: '/login',
    method: 'POST',
    data: data,
  });
}
