/*EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar,y  con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado
*/

function mostrar() {
  var respuesta;
  var raza;
  var nombre;
  var edad;
  var peso;
  var precioConsulta;
  var pesoGalgo;
  var nombreGalgoMasPesado;
  var contadorSharpei=0;
  var contadorGalgo=0;
  var contadorPastor=0;
  var edadMaxima;
  var nombrePerroMasViejo;
  var razaPerroMasViejo;
  var acumuladorprecioTotal=0;
  var descuento;
  var precioFinal;
  var cantidadTotalDePerros =0;
  var acumuladorPesoSharpei=0;
  var acumuladorPesoGalgo=0;
  var acumuladorPesoPastor=0;
  var promedioPesoSharpei;
  var promedioPesoGalgo;
  var promedioPesoPastor;

  do {

    do {
      raza = prompt("Ingrese la raza del perro (Sharpei, Galgo, Pastor)");
      raza = raza.toLowerCase();
    } while (!isNaN(raza) && raza != "sharpei" && raza != "galgo" && raza != "pastor");

    nombre = prompt("Ingrese el nombre del perro");

    do {
      edad = prompt("Ingrese la edad del perro (1 a 25)");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad < 1 || edad > 25);

    do {
      peso = prompt("Ingrese el peso del perro, mayor a cero");
      peso = parseInt(peso);
    } while (isNaN(peso) || peso < 1);

    do {
      precioConsulta = prompt("Ingrese el precio de la consulta");
      precioConsulta = parseInt(precioConsulta);
    } while (isNaN(precioConsulta) || precioConsulta < 500 ||  precioConsulta > 1500 );

    // fin validacion de ingresos

    switch (raza) {
      case "sharpei": {
        contadorSharpei++;
        acumuladorPesoSharpei = acumuladorPesoSharpei + peso;
        break;
      }

      case "galgo": {
		  //validacion de galgo mas pesado
        if (contadorGalgo == 0 || peso > pesoGalgo) {
          pesoGalgo = peso;
          nombreGalgoMasPesado = nombre;
        }
        acumuladorPesoGalgo = acumuladorPesoGalgo + peso;
        contadorGalgo++;
        break;
      }

      case "pastor": {
        acumuladorPesoPastor = acumuladorPesoPastor + peso;
        contadorPastor++;
        break;
      }
    }

	// validacion de perro mas viejo
    if (cantidadTotalDePerros == 0 || edad > edadMaxima) {
      edadMaxima = edad;
      nombrePerroMasViejo = nombre;
      razaPerroMasViejo = raza;
    }

    acumuladorprecioTotal = acumuladorprecioTotal + precioConsulta;
	cantidadTotalDePerros = contadorGalgo+contadorPastor+contadorSharpei;
    
    respuesta = confirm("¿Desea continuar ingresando?");
  } while (respuesta == true);





  if (cantidadTotalDePerros > 4) {
    descuento = acumuladorprecioTotal * 0.1;
  } else {
	  if(cantidadTotalDePerros>2)
	  {
		descuento = acumuladorprecioTotal * 0.05;
	  }
	  else{
		  descuento = 0;
	  }
  }

  precioFinal = acumuladorprecioTotal - descuento;

  if (contadorGalgo > 0) {
    promedioPesoGalgo = acumuladorPesoGalgo / contadorGalgo;
  } else {
    promedioPesoGalgo = 0;
  }

  if (contadorPastor > 0) {
    promedioPesoPastor = acumuladorPesoPastor / contadorPastor;
  } else {
    promedioPesoPastor = 0;
  }

  if (contadorSharpei > 0) {
    promedioPesoSharpei = acumuladorPesoSharpei / contadorSharpei;
  } else {
    promedioPesoSharpei = 0;
  }

  //A
  if (contadorGalgo > 0) {
    alert("El galgo más pesado es " + nombreGalgoMasPesado);
  } else {
    alert("No se vacunaron galgos");
  }

  //B
  alert("El importe total a pagar es " + precioFinal);

  //C
  alert(
    "El peso promedio de galgos es " +
      promedioPesoGalgo +
      ", el de pastores " +
      promedioPesoPastor +
      " y el de Sharpei " +
      promedioPesoSharpei
  );

  //D
  alert(
    "El perro mas viejo se llama " +
      nombrePerroMasViejo +
      ", es " +
      razaPerroMasViejo +
      " y tiene " +
      edadMaxima +
      " años"
  );
}
