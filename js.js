let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let section;
for (let i = 0; i < numbers.length; i++) {
    if(max<numbers[i]){
        max = numbers[i];
        section = i;
    }
}
alert("The maximum is " + max + " from section " + section);