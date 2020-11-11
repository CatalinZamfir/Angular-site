import { Injectable } from '@angular/core';
import {HouseAdd} from './HouseAdd';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  houses: HouseAdd[] = [];
  constructor() {
    const houseOne: HouseAdd = new HouseAdd();
    houseOne.id = 1;
    houseOne.name = 'Apartament 3 camere';
    houseOne.description = 'Ap de 3 cam in Floresti, zona Muzeul Apei. Apartamentul este format din 2 dormitoare, living cu bucatarie, baie, hol, balcon, etaj 2, este situat intr-o zona aerisita, linistita usor accesibila fata de statia de autobuz. Parcare exterioara in fata blocului. ';
    houseOne.price = 300;
    houseOne.imageUrl = 'https://img3.imonet.ro/XAG0/AG000JTPP5C/apartament-de-vanzare-2-camere-bucuresti-drumul-taberei-135356042_330x248.jpg';
    this.houses.push(houseOne);

    const houseTwo: HouseAdd = new HouseAdd();
    houseTwo.id = 2;
    houseTwo.name = 'Apartament 2 camere';
    houseTwo.description = 'Proprietar ofer spre vanzare apartament cu 2 camere. Nu sunt interesat de agenții imobiliare. Situat la periferie';
    houseTwo.price = 240;
    houseTwo.imageUrl = 'https://img2.imonet.ro/X982/98200H54JI6/apartament-de-vanzare-2-camere-bucuresti-ilfov-bucuresti-129678510.jpg';
    this.houses.push(houseTwo);
  }
  getHouses(): Observable<HouseAdd[]> {
    return of(this.houses);
  }
  addHouse(houseAdd: HouseAdd): Observable<any>{
    houseAdd.id = this.houses.length + 1;
    this.houses.push(houseAdd);
    return of(null);
  }

  findHousesByName(searchName: string): Observable<HouseAdd[]>{
    const houseResults: HouseAdd[] = [];
    for (const house of this.houses){
      if (house.name.toLowerCase().includes(searchName)){
          houseResults.push(house);
      }
    }
    return  of(houseResults);
  }

  deleteHouseById(id: number): Observable<HouseAdd>{
    this.houses = this.houses.filter(house => house.id !== id);
    return of(null);
  }

  update(houseToUpdated: HouseAdd): Observable<any>{
    this.deleteHouseById(houseToUpdated.id);
    this.houses.push(houseToUpdated);
    return of(null);
  }

  getHouseId(id: number): Observable<HouseAdd>{
    for (const house of this.houses){
      if (house.id === id){
        return of(house);
      }
    }

  }
}
