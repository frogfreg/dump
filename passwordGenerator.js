const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789`!\"$?%^&*()_-+={[}]:;@'~#|\\<,>.?/";

const generarContra = () => {
  // let numCaracteres = prompt("Ingrese la longitud de la contraseña");
  // const input = prompt("Ingrese el numero de caracteres");

  let numCaracteres = 200;
  // if (numCaracteres >= 15) {
  const password = [];
  for (let i = 0; i < numCaracteres; i++) {
    let caracter = caracteres[Math.floor(Math.random() * caracteres.length)];
    password.push(caracter);
  }
  let clave = password.join("");
  return clave;
  // } else {
  //   alert("La contraseña debe de contener al menos 15 caracteres");
  // }
};

const descifrar = clave => {
  console.time("ejecucion");
  let intento = generarContra();
  console.log(intento);
  let arrIntento = [...intento];
  for (let i = 1; i <= clave.length; i++) {
    if (intento.substring(0, i) !== clave.substring(0, i)) {
      for (caracter of caracteres) {
        if (caracter === clave[i - 1]) {
          arrIntento[i - 1] = caracter;
        }
        // console.log(arrIntento.join(""));
      }
    }
  }
  console.log(arrIntento.join(""));
  console.timeEnd("ejecucion");
};
