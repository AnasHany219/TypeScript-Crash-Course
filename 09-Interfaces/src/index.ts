/**
 * interfaces
 */

interface Author {
  name: string;
  avatar: string;
}

const author1: Author = {
  name: "anas",
  avatar: "/img/anas.png",
  // age: 21,
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "New Post",
  body: "bla bla bla",
  tags: ["ble", "blah"],
  created_at: new Date(),
  author: author1,
};

/**
 * as function argument types
 */

function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

/**
 * with arrays
 */

let posts: Post[] = [];
posts.push(newPost);
posts.push({ ...newPost, title: "New Post 2", body: "bla bla bla" });
