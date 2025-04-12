import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage.service';
import { PersonajeListComponent } from '../elements/personaje-list/personaje-list.component';

import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { GeolocationService } from 'src/app/services/geolocation.service';


import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { scan } from 'ionicons/icons';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    PersonajeListComponent, IonList, IonItem, IonInput, IonLabel, IonFab, IonFabButton, IonIcon]
})
export class Page1Page implements OnInit {
  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef;
  isSupported = false;
  barcodes: Barcode[] = [];
  latitude: number | null = null;
  longitude: number | null = null;
  errorMessage: string = '';
  map: google.maps.Map | undefined;


  get personajes(): any[] {
    return this.storageService.getLocalPersonajes;
  }

  constructor(
    private storageService: StorageService,
    private alertController: AlertController,
    private geolocationService: GeolocationService
  ) {
    addIcons({ scan });
  }

  async ngOnInit() {
    console.log("PER_STORAGE:", this.personajes);

    this.getUserLocation();

    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

    await this.loadMap();
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async getUserLocation() {
    try {
      const location = await this.geolocationService.getCurrentLocation();
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
    } catch (error) {
      this.errorMessage = error as string;
      console.error('Error fetching location:', this.errorMessage);
    }
  }

  async loadMap() {
    try {
      const location = await this.geolocationService.getCurrentLocation();

      const mapOptions: google.maps.MapOptions = {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: 15
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      new google.maps.Marker({
        position: mapOptions.center,
        map: this.map,
        title: 'You are here!'
      });

    } catch (error) {
      console.error('Error loading map:', error);
    }
  }
}
