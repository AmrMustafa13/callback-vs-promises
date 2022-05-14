// callbacks

// const posts = [
//     { title: "Post One", body: "This Is Post One" },
//     { title: "Post Two", body: "This Is Post Two" }
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = "";
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000)
// }

// getPosts(posts);

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000)
// }

// createPost({ title: "Post Three", body: "This Is Post Three" }, getPosts)

// promises

// const posts = [
//     { title: "Post One", body: "This Is Post One" },
//     { title: "Post Two", body: "This Is Post Two" }
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = "";
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000)
// }

// getPosts(posts);

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             // checking errors
//             const error = false;
//             if (!error)
//                 resolve();
//             else
//                 reject(`Error: Something Went Wrong`);
//         }, 2000)
//     })
// }

// createPost({ title: "Post Three", body: "This Is Post Three" })
//     .then(getPosts)
//     .catch(err => console.log(err))

// promise.all

// const promise1 = Promise.resolve(`Hello World`)
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, `Good Bye`)
// })
// const promise4 = fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values))