describe('app', function () {
    'use strict';
    var app = window.app;
    describe('generateMessage', function () {
        it ('should return vowelCount and isPalindrome', function() {
            expect(app.generateMessage("kajak")).toEqual({vowel: 2, palindrome: true});
            expect(app.vowelCount("ala")).toEqual(2);
            expect(app.isPalindrome("ala")).toEqual(true);
        });
    });
    describe('isPalindrome', function () {
        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app,'isPalindrome');
                app.generateMessage('ala');
            });
            it ('should return isPalindrome', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });
        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app,'isPalindrome').and.callThrough();
                app.generateMessage('ala');
            });
            it ('should return isPalindrome', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });
        describe('and.returnValue', function () {
            var palind;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it ('should return isPalindrome', function() {
                palind = app.isPalindrome('ala');
                expect(palind).toBe(true);
            });
            it ('should return isPalindrome1', function() {
                palind = app.generateMessage('ala');
                expect(palind).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.callFake', function () {
            var palind;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callFake(function (str){
                    var strTemp = str.toLowerCase(),
                        strLength = strTemp.length;
                    if (str === '') {
                        return true;
                    }
                    var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
                    for (var i = 0; i < halfLength; i++) {
                        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                            return true;
                        }
                    }
                    return false;
                });
            });
            it ('should call isPalindrome fake function', function() {
                palind = app.isPalindrome('ala');
                expect(palind).toBe(false);
            });
            it ('should call generateMessage and isPalindrome fake function', function() {
                palind = app.generateMessage('ala');
                expect(palind).toEqual({vowel: 2, palindrome: false});
            });
        });
        describe('calls.count()', function () {
            var palind;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it ('should notice that call isPalindrome is call', function() {
                palind = app.isPalindrome('ala');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it ('should notice that isPalindrome is call, ' + 'when generateMessage is call', function() {
                palind = app.generateMessage('ala');
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });
    });
    describe('vowelCount', function () {
        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app,'vowelCount');
                app.generateMessage('ala');
            });
            it ('should return vowelCount', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });
        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app,'vowelCount').and.callThrough();
                app.generateMessage('ala');
            });
            it ('should return vowelCount', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });
        describe('and.returnValue', function () {
            var vowel1;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it ('should return vowelCount', function() {
                vowel1 = app.vowelCount('ala');
                expect(vowel1).toBe(2);
            });
            it ('should return vowelCount', function() {
                vowel1 = app.generateMessage('ala');
                expect(vowel1).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.callFake', function () {
            var vowel1;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callFake(function (str){
                    var vowelList = 'aeiouyAEIOUY',
                        vovCount = 0;
                    for (var i = 0, strLength = str.length; i < strLength; i++) {
                        if (vowelList.indexOf(str[i]) !== -1) {
                            vovCount = vovCount + 2;
                        }
                    }
                    return vovCount;
                });
            });
            it ('should call vowelCount fake function', function() {
                vowel1 = app.vowelCount('ala');
                expect(vowel1).toBe(4);
            });
            it ('should call generateMessage and vowelCount fake function', function() {
                vowel1 = app.generateMessage('ala');
                expect(vowel1).toEqual({vowel: 4, palindrome: true});
            });
        });
        describe('calls.count()', function () {
            var vowel1;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it ('should notice that call vowelCount is call', function() {
                vowel1 = app.vowelCount('ala');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it ('should notice that vowelCount is call, ' + 'when generateMessage is call', function() {
                vowel1 = app.generateMessage('ala');
                expect(app.vowelCount.calls.count()).toEqual(2);
            });
        });
    });
});