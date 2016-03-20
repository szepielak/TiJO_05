describe('app', function () {
    'use strict';

    var app = window.app;

    var car;
    describe('Car', function () {
        describe('property', function () {
            car = new app.Car('Audi', 1998);

            it('should defined model', function () {
                expect(car.model).toBeDefined();
            });
            it('should defined year', function () {
                expect(car.year).toBeDefined();
            });
        });
        describe('value', function () {
            car = new app.Car('Audi', 1998);

            it('should be set to Audi on model property', function () {
                expect(car.model).toBe('Audi');
            });
            it('should be set to 1998 on year property', function () {
                expect(car.year).toBe(1998);
            });
        });
    });
});
