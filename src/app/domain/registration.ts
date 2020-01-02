import {Resource} from './resource';
import {Course} from './course';

export interface Registration extends Resource {

  date?: number;

  userId?: string;

  course: Course;
}
