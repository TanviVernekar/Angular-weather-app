import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



import { RemoveAllComponent } from 'src/app/remove-all/remove-all.component';
import { FavouriteService } from 'src/app/services/favourite.service';
import { HomeService } from 'src/app/services/home.service';
import { WeatherAppService } from 'src/app/services/weatherapp.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favouriteCities: any = [];
  constructor(
    public weatherAppServices: WeatherAppService,
    public homeServices: HomeService,
    public favouriteServices: FavouriteService,
    public dialog: MatDialog 
  ) {}
  ngOnInit(): void {
    this.favouriteServices.getFavouriteCities();
    let data: any = localStorage.getItem('favouriteCities');
    this.favouriteCities = JSON.parse(data);
  }
  showWeatherDetails(cityData: any) {
    localStorage.setItem('weatherDetails', JSON.stringify(cityData));
    this.homeServices.refresh();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveAllComponent, {
      // width: '250px',
    });
  }

  removeFromFavourite(cityData: any) {
    this.favouriteServices.removefromFavouriteList(cityData);
  }
}
