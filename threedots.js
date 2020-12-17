const ages = [11, 14, 16, 17,];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 22];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

// const business = 650;
// const minister = 450;
// const sochib = 350;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

const takaPoisa = [250, 450, 850, 950];
const maximum = Math.max(...takaPoisa);
console.log(maximum);

const friends = ['Mili', 'Ety', 'Rehana', 'Labonno', 'Ritu'];
const tinyFriend = Math.min(...friends.map(({length}) => length));
console.log(tinyFriend);