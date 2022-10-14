var monthNoName = function (value) {
    switch (value) {
        case 1: return `the month ${value} is January`;
            break;
        case 2: return `the month ${value} is February`;
            break;
        case 3: return `the month ${value} is March`;
            break;
        case 4: return `the month ${value} is April`;
            break;
        case 5: return `the month ${value} is May`;
            break;
        case 6: return `the month ${value} is June`;
            break;
        case 7: return `the month ${value} is July`;
            break;
        case 8: return `the month ${value} is August`;
            break;
        case 9: return `the month ${value} is September`;
            break;
        case 10: return `the month ${value} is October`;
            break;
        case 11: return `the month ${value} is November`;
            break;
        case 12: return `the month ${value} is December`;
            break;

        default:
            return`Invalid Enter  no from 1 to 12`;
            break;
    }
}
console.log(monthNoName(1));
console.log(monthNoName(12));
console.log(monthNoName(11));
console.log(monthNoName(13));
console.log(monthNoName(10));
console.log(monthNoName(4));
console.log(monthNoName(8));