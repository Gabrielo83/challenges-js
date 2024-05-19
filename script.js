//CODING CHALLENGE
/*1) REGISTRO
Vamos a construir un programa que permita al usuario registrarse en nuestra aplicación.
Para ello, en primer lugar vamos a darle la bienvenida al usuario y pregunarle si desea registrarse
Si acepta: le pedimos que ingrese un nombre de usuario y validar que tenga por lo menos
3 caracteres sin que sea case Sensitive (en minúsculas). Validar (mensaje de error si no tiene 3 carecteres)
Le pedimos qe ingrese una contraseña (min 6 caracteres) con case Sensitive (validar con mensaje de error si hay error)
Mostrar un mensaje (alert) indicando que se ha registrado correctamente.
*/

//creamos variables globales para acceder desde el while
let isRegistred, userRegister, passRegister;
const welcome = confirm("Bienvenido, para registrarte haz click en OK");

do {
  if (welcome) {
    //el flujo do while va a iterar cada vez que el registro de usuario sea incorrecto, en caso correcto no pasa por el userRegister
    //sino que pasa a el passRegister
    if (!userRegister) {
      userRegister = prompt("Ingrese un nombre de usuario");
    }
    if (userRegister.length >= 3) {
      userRegister = userRegister.toLowerCase();
      passRegister = prompt("Ingresa una contraseña");
      if (passRegister.length >= 6) {
        alert("Se completo el registo exitosamente");
        //si se completa el registro exitosamente se asigna true a la variable global isRegistred
        isRegistred = true;
      } else {
        alert("Debes ingresar una contraseña de al menos 6 caracteres");
        // en caso de ingresar una contraseña menor a 6 caracteres se resetea el passRegister a null asi se vuelve false y permite
        // que itere para solicitar nuevamente una contraseña
        passRegister = null;
      }
    } else {
      alert("El nombre de usuario tiene que tener mas de 3 caracteres");
      userRegister = null;
    }
  } else {
    alert("OK, te esperamos cuando gustes");
  }
} while (welcome && (!userRegister || !passRegister));

/*2) LOGIN
Cuando el registro este completo mostrar al usuario si desea iniciar sesión.
ACEPTAR: pedirle nombre de usuario y contraseña para registrarse
si son incorrectos alert con mje de error
si son correctos alert con mje de ingreso exitoso.
normalizar los datos
*/

// let userLogin, userPass;
// if (isRegistred) {
//   let login = confirm("Desea iniciar sesión?");
//   do {
//     if (login) {
//       userLogin = prompt("Ingrese su nombre de usuario");

//       if (userLogin === null) {
//         alert("Hasta pronto!!");
//         login = false;
//       } else {
//         userLogin = userLogin.toLowerCase();
//         userPass = prompt("Ingrese su password");
//         if (userPass === null) {
//           alert("Inicio de Sesión cancelada, hasta pronto!");
//           login = false;
//         } else {
//           if (userLogin === userRegister && userPass === passRegister) {
//             alert("Inicio de Sesión Exitoso");
//           } else {
//             alert("Alguno de los datos no son correctos");
//             userLogin = null;
//             userPass = null;
//           }
//         }
//       }
//     } else {
//       alert("OK, lo esperamos pronto");
//       login = false;
//     }
//   } while (login && (!userLogin || !userPass));
// }
