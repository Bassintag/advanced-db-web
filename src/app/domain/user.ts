import {Resource} from './resource';

export interface User extends Resource {

  username: string;

  password?: string;
}
