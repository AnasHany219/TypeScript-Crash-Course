"use strict";
/**
 * interfaces
 */
const author1 = {
    name: "anas",
    avatar: "/img/anas.png",
    // age: 21,
};
const newPost = {
    title: "New Post",
    body: "bla bla bla",
    tags: ["ble", "blah"],
    created_at: new Date(),
    author: author1,
};
/**
 * as function argument types
 */
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
/**
 * with arrays
 */
let posts = [];
posts.push(newPost);
posts.push(Object.assign(Object.assign({}, newPost), { title: "New Post 2", body: "bla bla bla" }));
