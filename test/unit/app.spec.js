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
});

