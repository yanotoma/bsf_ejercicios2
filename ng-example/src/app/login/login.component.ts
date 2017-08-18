import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../shared/user-profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  redirect: string;

  constructor(
    private fb: FormBuilder, 
    private userProfileService: UserProfileService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [ 'jcyovera', [Validators.required] ],
      password: [ '123456', [Validators.required] ],
    });

    this.redirect = this.activeRoute.snapshot.queryParams['redirectTo'];
  }

  onSubmit(model: MyApp.Models.IUser){
    this.userProfileService.login(model).subscribe( response => {
      if(response.length > 0){
        this.userProfileService.isLoggedIn = true;
        if(this.redirect){
          
          this.router.navigate([this.redirect]);
        }

      }
    });
  }

}
