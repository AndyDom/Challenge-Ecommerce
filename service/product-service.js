const datas = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



const createProduct = (name,image,price,category,description) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      name, 
      image, 
      price,
      id: uuid.v4(), 
      category,
      description
    }),
  }).then (respuesta => {
    if (respuesta.ok) {
      return respuesta.body
    }
    throw new Error ("No fue posible crear un producto")
  })
};



const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json()
  );
};

const actualizarCliente = (nombre,email,id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email})
  })
  .then( (respuesta) => respuesta)
  .catch((err) => console.log(err));
}

export const productServices = {
  datas,
  createProduct,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};