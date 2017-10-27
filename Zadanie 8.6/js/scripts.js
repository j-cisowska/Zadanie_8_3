var a = 15;
var b = 5;
var result = (a * a) - (2 * a * b) + (b * b);
console.log(result);

var value = 100;

if (value == 0) {
    console.log('wynik równa się 0');
} else if (value < 0) {
    console.log('wynik jest ujemny');
} else {
    console.log('wynik jest dodatni');
}

var coJestWiększe = 0 == value ? 'Zmienna 0 jest większa' : 'Zmienna 100 jest większa';
console.log(coJestWiększe);