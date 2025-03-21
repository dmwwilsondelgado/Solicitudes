// fetch("http://localhost:3000/posts").then((datos)=>{
//     const posts = datos.json().then((posts) => {
//         console.log(posts);
//     })
// })


const guuardar = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'adso2894667',
          author: 'Wilson Delgado', 
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


guuardar();