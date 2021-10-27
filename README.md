# Superheroes APP
Aplicación que funciona como un tipo de galeria de distintos personajes de fantasia principalmente de las franquicias de DC y Marvel.

## Instalación
En la carpeta arkham_app, instalar los paquetes necesarios con:
---bash
npm install
---

Una vez instalados los paquetes, levantar el servidor de pruebas con:
---bash
npm run dev-server
---

# patron de arquitectura

* Parcelas - contextos
# patrones de diseño
Los patrones de diseño utilizados en este proyecto son:

* Render props: Para manejar todo lo que es la comunicacion de los componentes padres e hijos.
* statefull and stateless: Para optimizar y diferenciar los componentes desde los mas simples con una unica función de mostrar data (stateless) hasta los mas complejos (statefull) que requieren mas logica y el manejo de state dentro de estos (procesos logícos).
* style component:Para desplegar un estilo en especifico segun la condicion propuesta al componente
* hight order component: Para pasar definiciones con context.
* provider: Para el manejo de context en esta aplicación web.