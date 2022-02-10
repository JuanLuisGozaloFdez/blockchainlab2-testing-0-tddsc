# UNIR Curso Experto Desarrollo Aplicaciones Blockchain

## Laboratorio de Testing

Mostramos un ejemplo de Test-Driven development con un Smart Contract

## Requerimientos previos

Instalamos los programas necesarios (si no están globalmente)
- Node.js
- npm
  - instalar truffle
  - instalar mocha
  - instalar chai
  - instalar ganache-cli

```bash
npm init
npm install truffle
npm install mocha
npm install chai
npm install ganache-cli
truffle init
```

Configuramos ahora el fichero truffle-config.js con la red adecuada (y otros parametros si se desea)


## Test

En una ventana separada, lanzar la red de pruebas para ver la ejecución de transacciones según lanzamos las pruebas:

```bash
ganache-cli
```

Ir añadiendo casos de prueba a los ficheros del directorio "test" en los ficheros "Test....sol" y "....test.js" correspondientes.

Desde la carpeta raiz del proyecto, si hemos definido el script "test" en el package.json como "truffle test", ejecutar:

```bash
npm test
```

Si no, ejecutar 

```bash
truffle test
```
