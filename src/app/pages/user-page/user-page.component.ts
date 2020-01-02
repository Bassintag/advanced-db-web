import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../../domain/page';
import {Registration} from '../../domain/registration';
import {RegistrationService} from '../../services/registrations.service';
import {ActivatedRoute} from '@angular/router';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  readonly registrationsObservable: Observable<Page<Registration>>;

  constructor(
    private readonly registrationService: RegistrationService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.registrationsObservable = activatedRoute.params.pipe(
      flatMap(p => this.registrationService.getMany(0, 20, {userId: p.id})),
    );
  }

  ngOnInit() {
  }

}
