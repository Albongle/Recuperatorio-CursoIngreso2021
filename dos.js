/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.

B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.

C) El promedio de precio de las cartas de por tipo.
*/

function mostrar()
{
	var nombreDeLaCarta;
	var tipoDeCarta;
	var rareza;
	var precio;
	var precioCartaTrampaMasCara;
	var nombreCartaTrampaMasCara;
	var rarezaCartaTrampaMasCara;
	var banderaPrimerIngreso;
	var acumuladorPrecioMagicas;
	var acumuladorPrecioMonstruo;
	var acumuladorPrecioTrampa;
	var promedioPrecioMagicas;
	var promedioPrecioMonstruo;
	var promedioPrecioTrampa;
	var contadorMagicas;
	var contadorTrampa;
	var contadorMonstruo;
	var contadorCartasUltraRara;
	var mensaje;

	respuesta=true;
	banderaPrimerIngreso=true;
	acumuladorPrecioMagicas=0;
	acumuladorPrecioMonstruo=0;
	acumuladorPrecioTrampa=0;
	promedioPrecioTrampa=0;
	promedioPrecioMonstruo=0;
	promedioPrecioMagicas=0;
	contadorMonstruo=0;
	contadorTrampa=0;
	contadorMagicas=0;
	contadorCartasUltraRara=0;


	while(respuesta==true)
	{
		nombreDeLaCarta=prompt("Ingrese nombre de la carta");

		tipoDeCarta=prompt("Ingrese tipo de carta","monstruo, magica o trampa");
		while(tipoDeCarta!="monstruo"&&tipoDeCarta!="magica"&&tipoDeCarta!="trampa")
		{
			tipoDeCarta=prompt("Ingrese tipo de carta","monstruo, magica o trampa");
		}

		rareza=prompt("Ingrese nivel de rareza","rara, super rara o ultra rara");
		while(rareza!="rara"&&rareza!="super rara"&&rareza!="ultra rara")
		{
			rareza=prompt("Ingrese nivel de rareza","rara, super rara o ultra rara");
		}

		precio=prompt("Ingrese precio","valor mayor a cero");
		precio=parseInt(precio);
		while(isNan(precio)||precio<0)
		{
			precio=prompt("Ingrese precio","valor mayor a cero");
			precio=parseInt(precio);
		}

		switch(tipoDeCarta)
		{
			case "magica":
			acumuladorPrecioMagicas=acumuladorPrecioMagicas+precio;
			contadorMagicas++;
			if(rareza=="ultra rara")
			{
				contadorCartasUltraRara++;
			}
			
			break;
			case "monstruo":
			acumuladorPrecioMonstruo=acumuladorPrecioMonstruo+precio;
			contadorMonstruo++;
			if(rareza=="ultra rara")
			{
				contadorCartasUltraRara++;
			}
			break;
			case "trampa":
			if(banderaPrimerIngreso==true||precioCartaTrampaMasCara<precio)
			{
				banderaPrimerIngreso=false;
				nombreCartaTrampaMasCara=nombre;
				rarezaCartaTrampaMasCara=rareza;
				precioCartaTrampaMasCara=precio;
				
			}
			acumuladorPrecioTrampa=acumuladorPrecioTrampa+precio;
			contadorTrampa++;
			break;
		}
		respuesta=confirm("¿Desea seguir?");
	}

	if(contadorTrampa>0)
	{
		promedioPrecioTrampa=acumuladorPrecioTrampa/contadorTrampa;
	}
	if(contadorMagicas>0)
	{
		promedioPrecioMagicas=acumuladorPrecioMagicas/contadorMagicas;
	}
	if(contadorMonstruo>0)
	{
		promedioPrecioMonstruo=acumuladorPrecioMonstruo/contadorMonstruo;
	}

	if(contadorTrampa>0)
	{
		mensaje="La carta tipo trampa con mayor precio se llama "+nombreCartaTrampaMasCara+" y es "+rarezaCartaTrampaMasCara;
	}
	
	mensaje=mensaje+". La cantidad de cartas vendidas de rareza ultra rara y de tipo magica o monstruo es: "+contadorCartasUltraRara;
	mensaje=mensaje+". El promedio de precio de las cartas trampa es: "+promedioPrecioTrampa+", el de las cartas magicas es: "+promedioPrecioMagicas+" y el de las tipo monstruo es :"+promedioPrecioMonstruo;

	document.write(mensaje);
}
