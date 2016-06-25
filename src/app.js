import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// let car = dataService.getCarByLicense('wwasd123');

// let cars = dataService.getCarsSortedByLicense();

// let cars = dataService.filterCarsByMake('o');

// for (let car of cars)
//     console.log(car.make);

let b = new Button('Click Me');
b.appendToElement($('body'));