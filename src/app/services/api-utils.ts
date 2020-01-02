import * as url from 'url';
import {environment} from '../../environments/environment';

export function resolveApiUrl(path: string): string {
  return url.resolve(environment.serverUrl, path);
}
