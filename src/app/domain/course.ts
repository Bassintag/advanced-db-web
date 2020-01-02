import {Author} from './author';
import {Provider} from './provider';
import {Knowledge} from './knowledge';
import {Resource} from './resource';

export interface Course extends Resource {

  title: string;

  description: string;

  imageLink: string;

  link: string;

  authors: Author[];

  provider: Provider;

  knowledges: Knowledge[];
}
