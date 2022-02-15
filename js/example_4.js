'use strict';

const products_4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const filterProduct = products_4.filter(item => 'photos' in item && item.photos.length > 0); //не смог разобраться, возможно просто времени не хватило, подсмотрел в решении
console.log(filterProduct); //по решению я принцип понял, но сам сделать не смог, почитаю дополнительно про filter

const sortProduct = products_4.sort(function (e, k) {  // из доп материавов все понятно и особо вопросов нет
    if (e.price > k.price) {
        return 1;
    }
    if (e.price < k.price) {
        return -1;
    }
    return 0;
});
console.log(sortProduct);