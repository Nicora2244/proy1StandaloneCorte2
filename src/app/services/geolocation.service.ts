import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {
  constructor() {}

  // Get user's current location (latitude and longitude)
  getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          reject(`Geolocation error: ${error.message}`);
        }
      );
    });
  }
}
