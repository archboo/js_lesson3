'use strict';

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author); //выводим свойство author объекта post
console.log(post.comments[0].rating.dislikes); //обращаемся к свойству comments объекта post, которое содержит массив объектов, берем из него первый элемент, и обращаемся к свойству raiting, которое в свою очередь содержит объект, и забираем dislike
console.log(post.comments[1].userId); //обращаемся к свойству comments объекта post, которое содержит массив объектов, берем из него второй элемент, и обращаемся к свойству userId
console.log(post.comments[1].text); //обращаемся к свойству comments объекта post, которое содержит массив объектов, берем из него второй элемент, и обращаемся к свойству text