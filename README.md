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
npm install --save-dev mocha
npm install --save-dev chai
npm install ganache-cli
truffle init
```

Configuramos ahora el fichero truffle-config.js con la red adecuada (y otros parametros si se desea)


## Test unitarios

Ir añadiendo casos de prueba a los ficheros del directorio "test" en los ficheros "Test....sol" y "....test.js" correspondientes.

Desde la carpeta raiz del proyecto, si hemos definido el script "test" en el package.json como "truffle test", ejecutar:

```bash
npm test
```

sino, ejecutar

```bash
truffle test
```

>Nota: Si no hay una red abierta y definida, Truffle usa por defecto una red interna. Si se quiere tener una red tipo ganache, debemos lanzarla en una ventana separada y configurar adecuadamente la red en el fichero truffle-config.js

## Test de cobertura

### con solidity-coverage

Este paquete está disponible para instalar con npm

```bash
npm install --save-dev solidity-coverage
```

y debemos configurar en el truffle-config.js añadiendo una linea de plugin:

```
module.exports = {
...
// Plugins
  plugins: ["solidity-coverage"],
...
}
```

Para lanzar los test, usamos 

```bash
truffle run coverage
```

### con surya

Adicionalmente vamos a usar la herramienta *surya* para ver la relación entre los contratos (necesitaremos el programa "*dot*" instalable con “*sudo apt install graphviz*”

```bash
npm install --save-dev surya
```


y lanzaremos el programa con

```bash
./node_modules/.bin/surya describe contracts/*.sol
./node_modules/.bin/surya inheritance contracts/*.sol | dot -Tpng >./surya_inheritance
./node_modules/.bin/surya graph contracts/*.sol | dot -Tpng >./surya_graph
```



## Test de lintering

