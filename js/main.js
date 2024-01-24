const item = [
    { Id: 1000, nombre: "monitor", categoria: "periferico", Precio: 1000, existencias: 20 },
    { Id: 1001, nombre: "teclado", categoria: "periferico", Precio: 150, existencias: 15 },
    { Id: 1002, nombre: "mouse", categoria: "periferico", Precio: 200, existencias: 10 },
    { Id: 1003, nombre: "windows11", categoria: "software", Precio: 150, existencias: 200 },
    { Id: 1004, nombre: "excel", categoria: "software", Precio: 50, existencias: 300 },
    { Id: 1005, nombre: "adobe pack", categoria: "software", Precio: 100, existencias: 70 },
    { Id: 1006, nombre: "notebook", categoria: "hardware", Precio: 1300, existencias: 5 },
    { Id: 1007, nombre: "netbook", categoria: "hardware", Precio: 700, existencias: 7 },
  ];
  
  alert("PreEntrega2 Facundo Abel Salaberry: Control de inventario-stock");
  
  let busqueda;
  let filtrar = "";
  
  do {
    busqueda = prompt("Ingrese una de las siguientes opciones: \n- ID \n- Nombre \n- Categoria \n- Precio \n- Adm (acceso empleado)").toLowerCase();
  } while (busqueda !== "id" && busqueda !== "nombre" && busqueda !== "categoria" && busqueda !== "precio" && busqueda !== "adm");
  
  switch (busqueda) {
    case "id":
      let itemId = Number(prompt("Ingrese un ID entre 1000 y 1007"));
      while (itemId < 1000 || itemId > 1007 || isNaN(itemId)) {
        itemId = Number(prompt("Ingrese un ID válido entre 1000 y 1007"));
      }
      filtrar = item.filter(item => item.Id === itemId);
      while (filtrar.length === 0) {
        itemId = Number(prompt("ID no encontrado. Ingrese un ID entre 1000 y 1007"));
        filtrar = item.filter(item => item.Id === itemId);
      }
      break;
  
    case "nombre":
      let itemNombre = prompt("Ingrese el nombre del producto: \n- Monitor \n- Keyboard \n- Mouse \n- Windows11 \n- Excel \n- Adobe pack \n- Notebook \n- Netbook").toLowerCase();
      while (!["monitor", "keyboard", "mouse", "windows11", "excel", "adobe pack", "notebook", "netbook"].includes(itemNombre)) {
        itemNombre = prompt("Ingrese un nombre válido de producto: \n- Monitor \n- Keyboard \n- Mouse \n- Windows11 \n- Excel \n- Adobe pack \n- Notebook \n- Netbook").toLowerCase();
      }
      filtrar = item.filter(item => item.nombre === itemNombre);
      while (filtrar.length === 0) {
        itemNombre = prompt("Ningún producto hallado con el nombre ingresado. Ingrese un nombre válido: \n- Monitor \n- Keyboard \n- Mouse \n- Windows11 \n- Excel \n- Adobe pack \n- Notebook \n- Netbook").toLowerCase();
        filtrar = item.filter(item => item.nombre === itemNombre);
      }
      break;
  
    case "categoria":
      let itemCategoria = prompt("Ingrese una de las siguientes categorías: \n- Periferico \n- Software \n- Hardware").toLowerCase();
      while (!["Periferico", "software", "hardware"].includes(itemCategoria)) {
        itemCategoria = prompt("Ingrese una categoría válida entre las siguientes: \n- Periferico \n- Software \n- Hardware").toLowerCase();
      }
      filtrar = item.filter(item => item.categoria === itemCategoria);
      while (filtrar.length === 0) {
        itemCategoria = prompt("Ninguna categoría coincide con la ingresada. Ingrese una categoría válida de las siguientes: \n- Periferico \n- Software \n- Hardware").toLowerCase();
        filtrar = item.filter(item => item.categoria === itemCategoria);
      }
  
      break;
  
    case "precio":
      let itemPrice = Number(prompt("Ingrese el valor de su presupuesto"));
      while (isNaN(itemPrice) || itemPrice < 0) {
        itemPrice = Number(prompt("Ingrese un presupuesto mayor a 0"));
      }
      filtrar = item.filter(item => item.Precio <= itemPrice);
      while (filtrar.length === 0) {
        itemPrice = Number(prompt("No hay productos que entren en su presupuesto, por favor ingrese un presupuesto mayor a u$d50"));
        filtrar = item.filter(item => item.Precio <= itemPrice);
      }
      break;
  
    case "adm":
      let usrAdm = prompt("Indique su necesiadad: Stock / Reposicion").toLowerCase();
      let stock = "";
      let reorder = "";
      while (usrAdm !== "salir") {
        if (usrAdm === "stock") {
          stock = item.sort((a, b) => a.existencias - b.existencias);
          alert(JSON.stringify(stock));
        } else if (usrAdm === "reposicion") {
          reposicion = item.sort((a, b) => b.existencias - a.existencias);
          alert(JSON.stringify(reposicion));
        } else {
          alert("Indique su necesiadad: Stock / Reposicion o Salir para finalizar");
        }
        usrAdm = prompt("Indique su necesiadad: Stock / Reposicion o Salir para finalizar").toLowerCase();
      }
      break;
  
    default:
      alert("Ingrese una de las siguientes opciones: \n- ID \n- Nombre \n- Categoria \n- Precio \n- Adm (acceso empleado)").toLowerCase();
      while (busqueda !== "id" && busqueda !== "nombre" && busqueda !== "categoria" && busqueda !== "precio" && busqueda !== "adm") {
        busqueda = prompt("Ingrese una de las siguientes opciones: \n- ID \n- Nombre \n- Categoria \n- Precio \n- Adm (acceso empleado)").toLowerCase();
      }
      break;
  }
  
  if (filtrar.length > 0) {
    filtrar.forEach((item) => {
      alert(`
      id: ${item.Id}
      nombre: ${item.nombre}
      categoria: ${item.categoria}
      precio: $${item.Precio}
      stock: ${item.existencias}
      `);
    });
  }