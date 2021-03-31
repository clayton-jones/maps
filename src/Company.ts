import faker from 'faker';
import { Marker } from './CustomMap';

export class Company implements Marker {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h2>Catch phrase: ${this.catchPhrase}<h2>
      </div>
    `;
  }
}
