(function () {
    'use strict';

    window.app = {
        assignToSwimmingCourse: function (name, birthDate) {
            var course;
            var age = this.calculateAge(birthDate);

            if (age >= 3 && age <= 12) {
                course = {name: name, age: age, course: 'kids'};
            }
            else if (age > 12 && age < 18) {
                course = {name: name, age: age, course: 'teens'};
            }
            else if (age >= 18) {
                course = {name: name, age: age, course: 'adults'};
            }
            else {
                throw new TypeError('Wrong data or too young!');
            }
            return course;
        }
    }
})();







