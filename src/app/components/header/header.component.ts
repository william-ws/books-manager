import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.isAuth = this.authService.isAuth; 
  }

  onClickSignOut() {
     this.router.navigate(['auth']);this.authService.signOut();
   
  }

}
