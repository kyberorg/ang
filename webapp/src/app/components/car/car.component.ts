import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    name: string;
    speed: number;
    model: string;
    colors: Colors;
    engine: {
        volume: number,
        fuel: Fuel,
    };
    options: string[];

    constructor() {
    }

    ngOnInit(): void {
        this.name = 'UAZ';
        this.speed = 90;
        this.model = 'Patriot';
        this.colors = {
            car: 'Orange',
            salon: 'Grey',
            wheels: 'Black'
        };
        this.engine = {
            volume: 2.7,
            fuel: Fuel.BENSIN
        };
        this.options = ['ABS', '4WD'];
    }

    onMitsubishiSelect(): void {

    }

    onAutoSelect(auto: string): void {
        switch (auto) {
            case 'BMW': {
                this.name = 'BMW';
                this.speed = 270;
                this.model = 'X5';
                this.colors = {
                    car: 'Black',
                    salon: 'Green',
                    wheels: 'Black'
                };
                this.engine = {
                    volume: 4.7,
                    fuel: Fuel.DIESEL
                };
                this.options = ['ABS', '4WD', 'AutoPilot'];
                break;
            }

            case 'Mitsubishi': {
                this.name = 'Mitsubishi';
                this.speed = 200;
                this.model = 'Pajero';
                this.colors = {
                    car: 'Black',
                    salon: 'Grey',
                    wheels: 'White'
                };
                this.engine = {
                    volume: 3.2,
                    fuel: Fuel.DIESEL
                };
                this.options = ['ABS', '4WD', 'SuperSelect'];
                break;
            }

            case 'UAZ': {
                this.ngOnInit();
                break;
            }
        }
    }
}

interface Colors {
    car: string;
    salon: string;
    wheels: string;
}

enum Fuel {
    BENSIN,
    DIESEL
}
