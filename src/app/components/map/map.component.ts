import {MapService} from './map.service';
import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAP_STYLE} from './map.style';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import { } from 'googlemaps';
import {DEFAULT_MAP_ZOOM} from './map.constants';
import {Content} from "../../models/content";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, Content {
  title = 'Map';

  public junctions: any;

  public styles = MAP_STYLE;

  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private mapService: MapService) {

  }

  ngOnInit() {
    this.junctions = [];

    // Set google maps defaults
    this.latitude = 6.844001;
    this.longitude = 79.940726;
    this.zoom = DEFAULT_MAP_ZOOM;

    // Create search FormControl
    this.searchControl = new FormControl();

    // Set current position
    this.setCurrentPosition();

    // Load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // Get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // Verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // Set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = DEFAULT_MAP_ZOOM;
        });
      });
    });

    this.mapService.getAllJunctions()
      .then(res => {
        this.junctions = res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = DEFAULT_MAP_ZOOM;
      });
    }
  }

}
