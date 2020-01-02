import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CoursesPageComponent} from './pages/courses-page/courses-page.component';
import {CoursePreviewComponent} from './course-preview/course-preview.component';
import {HttpClientModule} from '@angular/common/http';
import {PagerComponent} from './pager/pager.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {CoursePageComponent} from './pages/course-page/course-page.component';
import {AuthorsPageComponent} from './pages/authors-page/authors-page.component';
import {TopicsPageComponent} from './pages/topics-page/topics-page.component';
import { LoggedInFormComponent } from './logged-in-form/logged-in-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    CoursesPageComponent,
    CoursePreviewComponent,
    PagerComponent,
    LoginFormComponent,
    CoursePageComponent,
    AuthorsPageComponent,
    TopicsPageComponent,
    LoggedInFormComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'courses',
        component: CoursesPageComponent,
      },
      {
        path: 'courses/:id',
        component: CoursePageComponent,
      },
      {
        path: 'authors',
        component: AuthorsPageComponent,
      },
      {
        path: 'topics',
        component: TopicsPageComponent,
      },
      {
        path: 'user/:id',
        component: UserPageComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
