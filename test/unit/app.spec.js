describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack',
                age: 20,
                course: 'adults'
            });
            expect(app.assignToSwimmingCourse('Maria', '11/10/1997')).toEqual({
                name: 'Maria',
                age: 18,
                course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John',
                age: 14,
                course: 'teens'
            });
            expect(app.assignToSwimmingCourse('Bella', '06/04/2002')).toEqual({
                name: 'Bella',
                age: 13,
                course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack',
                age: 5,
                course: 'kids'
            });
            expect(app.assignToSwimmingCourse('Jacob', '10/08/2011')).toEqual({
                name: 'Jacob',
                age: 4,
                course: 'kids'
            });
        });
    });

    describe('calculateAge', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'calculateAge');
                app.calculateAge('10/10/1991');
                //app.assignToSwimmingCourse('Jack', '10/10/1991');

            });
            it('should call calculateAge function', function () {
                expect(app.calculateAge).toHaveBeenCalled();
                expect(app.calculateAge).toHaveBeenCalledWith('10/10/1991');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'calculateAge').and.callThrough();
                app.assignToSwimmingCourse('Maria', '11/10/1997');
            });
            it('should call calculateAge function function ' +
                'when assignToSwimmingCourse is call', function () {
                expect(app.calculateAge).toHaveBeenCalled();
                expect(app.calculateAge).toHaveBeenCalledWith('11/10/1997');
            });
        });

        describe('and.returnValue', function () {
            var age;
            beforeAll(function () {
                spyOn(app, 'calculateAge').and.returnValue(10);
            });
            it('should call calculateAge and return 10', function () {
                age = app.calculateAge('11/10/2000');
                expect(age).toBe(10);
            });
            it('should call assignToSwimmingCourse and calculateAge should return 10', function () {
                age = app.assignToSwimmingCourse('Maria', '11/10/1980');
                expect(age).toEqual({name: 'Maria', age: 10, course: 'kids'});
            });
        });
    });
});

