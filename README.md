Examen Segunda Evaluación
=========================

# Día 21/05/2018 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: En cada pregunta se especifica si se valora en el examen de diseño o en el de desarrollo.
* Nota3: Para aprobar cada examen hay que obtener una puntuación mínima de 5 puntos en ese examen.
* Nota4: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. El examen consta de ejercicios que se pueden resolver de forma independiente. Los apartados de diseño y de desarrollo también se pueden resolver por separado. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
* Nota5: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/profitoro-enunciado-extra1.git
```

* Vaya al directorio del repositorio

```bash
    cd profitoro-enunciado-extra1
```

* En la consola de Firebase cree una aplicación.

* Configure el fichero `index.js` que está en el directorio `firebaseapp` para que apunte a su base de datos.

* Configure su usuario de Git (es único para todos)

```bash
    git config user.name "user-daw-zayas"
    git config user.email "javier.perezarteaga@educa.madrid.org"
```

* Cree un *branch* con su nombre y apellidos separados con guiones (no incluya mayúsculas, acentos o caracteres no alfabéticos, excepción hecha de los guiones). Ejemplo:

```bash
    git checkout -b <fulanito-perez-gomez>
```

* Compruebe que está en la rama correcta:

```bash
    git status
```

* Suba la rama al repositorio remoto:

```bash
    git push origin <nombre-de-la-rama-dado-anteriormente>
```

* Instale las dependencias arranque la aplicación:

```bash
    npm install
    npm run dev
```

Navegue a [http://localhost:3000](http://localhost:3000)

* Dígale al profesor que ya ha terminado para que compruebe que todo es correcto y desconecte la red.

## EXAMEN

#### 1- Muestre el usuario que está conectado al sistema.

![todo](https://bitbucket.org/surtich/profitoro-enunciado-extra1/downloads/todo.gif)

#### 1.1- (1 punto desarrollo).

Cuando esté conectado, encima de "logout", aparecerá la foto del usuario con la que se haya conectado o, sino tiene foto, la imagen por defecto "~/assets/images/tomato.png".

#### 1.2- (1 punto diseño).

La foto se mostrará redondeada y con un borde negro alrededor y separado de la foto. La separación del borde de la foto tendrá un fondo blanco.

![image1.2](https://bitbucket.org/surtich/profitoro-enunciado-extra1/downloads/image1.2.png)

#### 1.3- (2 puntos diseño).

Al situarse encima de la foto, la foto se volteará y en la cara inversa "backface" se mostrará el nombre del usuario conectado. La foto del usuario se mostrará semitransparente. La separación del borde de la foto pasará de blanco a rojo.

![image1.3](https://bitbucket.org/surtich/profitoro-enunciado-extra1/downloads/image1.3.png)

#### 1.4- (1 punto diseño).

La animación anterior sólo se producirá cuando esté encima de ella dos segundos. Si está menos tiempo no se producirá.

#### 1.5- (1 punto diseño).

La imagen se volteará al estado original inmediatamente al dejar de estar encima de ella, no se esperará los dos segundos.

#### 1.6- (1 punto diseño).

Además de la imagen del usuario conectado, se mostrará su nombre (displayName). Se mostrará en rojo y en negrita.

#### 1.7- (1 punto diseño).

El nombre del usuario estará centrado vertical y horizontalmente respecto a la imagen. El centrado se mantendrá independientemente del tamaño del nombre del usuario.

#### 1.8- (1 punto diseño).

Si el nombre de usuario es muy largo, se mostrará con elipsis.

#### 1.9- (1 punto desarrollo).

En "settings", al cambiar el nombre del usuario, se actualizará en la cabecera.

#### 1.10- (2 puntos desarrollo).

En "settings", al cambiar la imagen de perfil del usuario, se actualizará en la cabecera.

#### 1.11- (2 puntos diseño).

La acción "logout" y el menú settings (en adelante conocidos como "menús de usuario"), se mostrarán al lado de la imagen de perfil (a la derecha y centrados), con el estilo y disposición de la imagen.

![image1.11](https://bitbucket.org/surtich/profitoro-enunciado-extra1/downloads/image1.11.png)

#### 1.12- (1 punto desarrollo).

Los "menús de usuario" anteriores estarán ocultos por defecto y se mostrarán al pulsar sobre la imagen de perfil. Al pulsar sobre "logout" y "settings" se seguirán haciendo las acciones correspondientes.

#### 1.13- (1 punto desarrollo).

Al volver a pulsar sobre la imagen de perfil, se ocultarán los menús.

#### 1.14- (0,5 puntos desarrollo).

También se ocultarán cuando el ratón ya no esté sobre la imagen de perfil o cuando se pulse sobre cualquier otra acción.

#### 1.15- (1 punto desarrollo).

La imagen de perfil no se volteará cuando se estén visualizando los "menús de usuario". Es decir, que sólo se volteará cuando se esté más de dos segundos encima de la imagen sin hacer "click" sobre ella.

#### 1.16- (0,5 puntos desarrollo).

Cuando la imagen esté volteada (por consiguiente los "menús de usuario" ocultos), si se pulsa para ver los "menús de usuario", se rotará también la imagen volviendo a su estado inicial.

#### 2.- (2 puntos desarrollo).

En la vista de "workouts", cuando esté editando un workout, habrá un botón adicional con el mismo estilo y a continuación de "Apply", que al ser pulsado borrará el workout de Firebase y actualizará la vista, saliendo del modo edición del workout. 


Para entregar
-------------

* Ejecute el siguiente comando para comprobar que está en la rama correcta y ver los ficheros que ha cambiado:


```bash
    git status
```

* Prepare los cambios para que se añadan al repositorio local:

```bash
    git add --all
    git commit -m "completed exam"
```

* Compruebe que no tiene más cambios que incluir:

```bash
    git status
```

* Dígale al profesor que va a entregar el examen.

* Conecte la red y ejecute el siguiente comando:

```bash
    git push origin <nombre-de-la-rama>
```

* Abandone el aula en silencio.