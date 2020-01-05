import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {resolveApiUrl} from './api-utils';
import {Page} from '../domain/page';
import {AuthService} from './auth.service';

export class ResourceService<T> {

  private $authHeader: string;

  get authHeader(): string {
    return this.$authHeader;
  }

  constructor(
    public readonly httpClient: HttpClient,
    public readonly authService: AuthService,
    private readonly path: string,
  ) {
    this.authService.credentials.subscribe((c) => {
      this.$authHeader = c && ('Basic ' + btoa(`${c.username}:${c.password}`));
    });
  }

  getMany(page: number = 0, size: number = 20, filters: { [key: string]: string } = {}): Observable<Page<T>> {
    const filtersReduced = Object.keys(filters).filter(k => filters[k] != null).reduce((p, v) => ({...p, [v]: filters[v]}), {});
    return this.httpClient.get<Page<T>>(resolveApiUrl(this.path), {
      params: new HttpParams({
        fromObject: {
          page: page.toFixed(),
          size: size.toFixed(),
          ...filtersReduced,
        }
      }),
      headers: this.authHeader && {
        Authorization: this.authHeader,
      }
    });
  }

  getById(id: string): Observable<T> {
    return this.httpClient.get<T>(resolveApiUrl(`${this.path}/${id}`), {
      headers: this.authHeader && {
        Authorization: this.authHeader,
      }
    });
  }

  create(body: T): Observable<T> {
    return this.httpClient.post<T>(resolveApiUrl(this.path), body, {
      headers: this.authHeader && {
        Authorization: this.authHeader,
      }
    });
  }
}
