import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { SearchBarComponent } from '../../components/search-bar-component/search-bar-component';

@Component({
  imports: [RouterOutlet, NavbarComponent, SearchBarComponent],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
