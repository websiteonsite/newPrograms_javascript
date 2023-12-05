const car = {
    name: 'car',
    color: 'white',
    getDetails(brand, seats) {
        console.log(
            `
            This is a ${this.color} ${this.name} of ${brand} company.
            It has ${seats} seats`
        );
    },
};

const bus = {
    name: 'bus',
    color: 'blue',
};

car.getDetails('Audi', 5);
car.getDetails.call(bus, 'RedBus', 50);
car.getDetails.apply(bus, ['StarBucks', 30]);

const veh1 = car.getDetails.bind(bus);
veh1('Silver', 22);
veh1('Gold', 45);