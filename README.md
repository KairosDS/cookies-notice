# cookies-notice

Lit-Element web component Cookies-notice. This web component displays a pop-up with a brief comment warning about the use of cookies on the website.

## Demo


### Option 1
Defining the duration of the cookies, with the "days-expiry" property, with unit of duration in days. In this example the duration is 30 days

```
            <cookies-notice  days-expiry="30" language="es">
                <div>
                    <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                    <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                    <button>aceptar y cerrar</button>
                    <a href="cookie-policy.html"
                    aria-label="Abre en la misma ventana, politica de privadidad" 
                    target="_self" 
                    rel="noopener noreferrer">Política de privacidad</a>
                </div>
            </cookies-notice>
```


### Option 2
Combination of properties, duration of cookies, with days-expiry( one year ) together with language folder if needed displaying extra information links

```
            <cookies-notice  days-expiry="365" language="es">
                <div>
                    <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                    <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                    <button>aceptar y cerrar</button>
                    <a href="cookie-policy.html"
                    aria-label="Abre en la misma ventana, politica de privadidad" 
                    target="_self" 
                    rel="noopener noreferrer">Política de privacidad</a>
                </div>
            </cookies-notice>
```




```html

<cookies-notice></cookies-notice>

```


## Properties


|      Name       |     Attribute     |  type  |                     Description                         |
|-----------------|-------------------|--------|---------------------------------------------------------|
|   daysExpiry    |     days-expiry   | Number |      Number of days with which the cookies expire       |
|    language     |      language     | string |     The selection of content in another language if the app or website needs it and has this option available      |





## CSS Custom Properties


|      Name             |                     Description                         |
|-----------------------|---------------------------------------------------------|
|    --line-height      |             line-height to the text component           |
|   --base-font-size    |      base-font-size to the font size text component     |
|   --cookies-color     |cookies-color to the background-color to cookie component|
|    --button-color     |        button-color to the background-color component   |
|     --base-text       |           base-text to the text-color component         |
|    --buttom-text      |       buttom-text to the text-color buttoncomponent     |






## CSS Shadow Parts


|      Name             |                     Description                         |
|-----------------------|---------------------------------------------------------|
|   cookie-content      |          access to the section  CSS/styles tag          |
|    cookie-text        |       access to the paragraph text CSS/styles tag       |
|   cookie-button       |           access to the button CSS/styles tag           |



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.


## Viewing Your Element

```
$ npm run start
```

## Running Test
```
$ npm run test
```

## Build
```
$ npm run build
```

## Author
**KairósDS Team**

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details