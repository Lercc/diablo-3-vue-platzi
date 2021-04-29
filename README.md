# DIABLO 3

## BLIZZARD
Portal de [desarrolladores](https://develop.battle.net/) de Blizzard

[API ](https://develop.battle.net/documentation/diablo-3/community-apis) de la comunidad de Blizzard
```
Las APIs de comunidad de Diablo III, nos van a traer datos del perfil del usuario que estemos buscando, como por ejemplo, los héroes que tiene o élites que ha matado a lo largo del tiempo.
```

[API ](https://develop.battle.net/documentation/diablo-3/game-data-apis) de datos de Blizzard
```
A través de las APIs de datos del juego de Diablo III, podemos obtener información sobre las temporadas, los rankings y las eras (las eras son parecidas a las temporadas, un espacio temporal limitado)
```

## Acceso a las APIs: Crear token tipo Cliente
[API](https://develop.battle.net/access/clients/create) de creación de acceso a las API de Blizard.


[GESTIÓN DE CLIENTES](https://develop.battle.net/access/clients) de acceso a las API de Blizard.

## RFC DE OAUTH
RFC (Request For Comments -> Documento numérico en donde se describen y definen protocolos)
See [OAuth 2.0 Authorization Framewor](https://tools.ietf.org/html/rfc6749#section-1.3.4).


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Carpetas
    Vamos a explicar que haremos con cada carpeta:

        - /api: Archivos con las llamadas HTTP a las APIs. Importaremos axios y lo utilizaremos para 
        obtener los datos del juego.

        - /assets: En esta carpeta tendremos archivos CSS globales e imágenes, es decir, contenido
         estático.

        - /componets: Aquí estarán los componentes reusables de nuestra aplicación. Piensa por ejemplo,
         en un componente loading que podrá ser usado varias veces a lo largo de la app.

        - /directives: Las directivas personalizadas que hagas estarán aquí. Ejemplos de directivas
        en vue son: v-if, v-for, etc. Cuando creemos una directiva personalizada, la alojaremos en 
        esta carpeta.

        - /filters: Dentro de esta carpeta estarán los filtros que usaremos para darle formato 
        a los datos de nuestra vista.

        - /layouts: Los layouts de nuestra app. Serán la estructura base sobre la que inyectaremos 
        nuestras vistas. Suelen tener el header-bar y el footer común a toda la app.

        - /mixins: Los mixins (fragmentos de código reusable por nuestros componentes) los encuentras 
        en esta carpeta.

        - /plugins: Esta carpeta puede llevar a confusión porque, realmente, lo que alojaremos aquí
        no son plugins que creemos para Vue, sino que tendremos librerías de terceros.
        Por ejemplo Bootstrap-Vue, la librería de componentes que usaremos a lo largo del curso.

        - /router: Controlaremos las rutas de nuestra aplicación desde aquí.

        - /store: El estado de nuestra aplicación. Lo gestionaremos a través de Vuex.

        - /utils: Carpeta con funciones generales o que no tienen una temática definida. No es
         conveniente abusar de esto. Si tienes mucho contenido aquí quiere decir que deberías 
         agrupar funcionalidades en otro directorio.

        - /views: Aquí estarán todas las vistas de nuestra aplicación. Hay que recordar que, 
        en Vue, todo son componentes, y, en este caso, dichos componentes hacen de vistas de
        nuestra aplicación.

### Restructura componentes de la carpeta "VIEWS"
    Se crea una carpeta con el nombre del componente a crear (views/HOME),
    y dentro se crea el componete correspondiente con el nombre (index.vue),
    para estandarizar y mejorar la estructura de los componentes y subcomponentes. 

### Carpeta API
    📂 src/
    └──📂 api/
    ├── oauth.js
    ├── search.js
    └── season.js