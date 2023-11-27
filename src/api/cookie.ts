import Cookies from 'js-cookie';

const TokenKey = 'access_token';

export function getToken(): string | undefined {
  return Cookies.get(TokenKey);
}

export function setToken(token: string): void {
  Cookies.set(TokenKey, token);
}

export function removeToken(): void {
  Cookies.remove(TokenKey);
}
