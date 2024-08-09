import Config from '@/config';

export function apiRoute(subroute: string) {
  return `${Config.backendServer}/${subroute}`;
}
