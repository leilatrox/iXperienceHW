const url = "https://jsonplaceholder.typicode.com/posts/2";
const postUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Tye': 'application/json',
    },
    
  });
  return response.json();
}

async function createPost(post) {
  const response = await fetch(postUrl, {
    method: "POST",
    headers: {
      'Content-Tye': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

async function updatePost(post) {
  const response = await fetch(url, {
    method: 'PUT', 
    headers: {
      'Content-Tye': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

async function init() {
  try {
    const posts = await getPosts();
    const response = await createPost({
      userId: 1, title: "jfakljdklj", complete: false
    })
    const update = await updatePost({
      userId: 3, title: 'jaskdjfll', complete: true
    })
    console.log('POST', response);
    console.log('PUT', update);
  } catch(err) {
    console.log(err);
  }
}

init();
