const url = "http://localhost:3000/";
const solicitud = async (url) =>{
  const respuesta = await fetch(`${url}posts`);
  const datos = await respuesta.json();
  return datos;
}
solicitud(url).then(data =>
  console.log(data)
)
const guardar = () => {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
guardar();