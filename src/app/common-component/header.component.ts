import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/ApiServices/api-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedIndex: number = 0;  
  accessToken: string | null = null;
  accessTokenCheck=true
  username: string = '';
  dropdownVisible: boolean = false;

  constructor(private router: Router  ,  private elRef: ElementRef, private Profile: ApiServicesService,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('accessToken');
    if (this.accessToken) {
      console.log("accessToken" ,this.accessToken)
      this.accessTokenCheck=false
      this.Profile.getProfile().subscribe((res:any) => {
        console.log(res)
        if (res.success ==true) {
          
          this.username= res.data.name
        }
        if (res.code == 400) {
          this.accessTokenCheck=true
          // this.bar.openSnackBar(res.messages, 'close ', 'red-snackbar');
        }

      }, (err:any) => {
        this.accessTokenCheck=true
      })
      // this.username = localStorage.getItem('username') || ' Shivam';
    }
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    
    this.accessToken = null;
    this.username = '';
    this.dropdownVisible = false;
    this.accessTokenCheck=true

   
  }


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = this.elRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.dropdownVisible = false;
    }
  }

  ngOnDestroy(): void {
    this.dropdownVisible = false;
  }
  onTabChange(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/home']);
        break;
      case 1:
        this.router.navigate(['/cources']);
        break;
      case 2:
        this.router.navigate(['/instractors']);
        break;
      case 3:
        this.router.navigate(['/home']);
        break;
      case 4:
        this.router.navigate(['/home']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }


  login(){
    this.router.navigate(['/account/login'])
  }
}
