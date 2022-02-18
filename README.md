# UNIR Curso Experto Desarrollo Aplicaciones Blockchain

## Laboratorio de Testing

Mostramos un ejemplo de diversas herramientas para la ejecución de Tests con un Smart Contract.
Se han creado diferentes carpetas de contratos de ejemplo para mostrar cada herramienta.

- [Tests Unitarios](#test-unitarios)
  - Truffle Assert
  - Mocha
  - Chai
- [Tests de Cobertura](#test-de-cobertura)
  - [Solidity-coverage](#con-solidity-coverage)
  - [Surya](#con-surya)
- [Tests de Formato](#test-de-lintering)
  - [Solhint](#con-solhint)
  - [Ethlint (antes Solium)](#con-solium)
- [Tests de Seguridad](#pruebas-de-seguridad)
  - [Solidity-analyzer](#con-solidity-analyzer)
  - [Mythril](#con-mythrill)

## Test unitarios

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

Ir añadiendo casos de prueba a los ficheros del directorio "test" en los ficheros "Test....sol" y "....test.js" correspondientes.

Desde la carpeta raiz del proyecto, si hemos definido el script "test" en el package.json como "truffle test", ejecutar:

```bash
npm test
```

sino, ejecutar

```bash
truffle test
```

>Nota: Si no hay una red abierta y definida, Truffle usa por defecto una red interna. Si se quiere tener una red tipo ganache, debemos lanzarla en una ventana separada (con ganache-cli, por ejemplo) y configurar adecuadamente la red en el fichero truffle-config.js

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

## Test de cobertura

### **con solidity-coverage**

Este paquete está disponible para instalar con npm

```bash
npm install --save-dev solidity-coverage
```

y debemos configurar en el truffle-config.js añadiendo una linea de plugin:

```bash
module.exports = {
...
// Plugins
  plugins: ["solidity-coverage"],
...
}
```

Usaremos los contratos en ./contracts/contracts-coverage-demo

Para lanzar los test, usamos

```bash
truffle run coverage
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

### **con surya**

Adicionalmente vamos a usar la herramienta *surya* para ver la relación entre los contratos (necesitaremos el programa "*dot*" instalable con “*sudo apt install graphviz*”

```bash
npm install --save-dev surya
```

Usaremos las contratos en ./contracts-surya-demo (MetaCoin)
y en ./contracts-surya-demo2 (Identidad ERC725-735)

y lanzaremos el programa con

```bash
./node_modules/.bin/surya describe contracts/*.sol
./node_modules/.bin/surya inheritance contracts/*.sol | dot -Tpng >./outputs/surya_inheritance
./node_modules/.bin/surya graph contracts/*.sol | dot -Tpng >./outputs/surya_graph
./node_modules/.bin/surya mdreport outputs/surya-report-fileMetaCoin.md contracts/MetaCoin.sol
./node_modules/.bin/surya parse contracts/MetaCoin.sol
./node_modules/.bin/surya ftrace MetaCoin::sendCoin all contracts/MetaCoin.sol
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

## Test de lintering

### **con solhint**

Este paquete está disponible para instalar con npm

```bash
npm install --save-dev solhint
./node_modules/.bin/solhint --version
```

Lo primero es inicializar el directorio como proyecto solhint. lo que generará un par de ficheros de configuracion: .solhint.json y .solhintignore

En el fichero .solhint.json podremos indicar que tipo de análisis realizar (el más usual es "solhint:recommended"

```bash
cd proyecto
./node_modules/.bin/solhint –init
```

Usaremos la carpeta contracts-coverage-demo

Para generar un informe en formato Markdown del estado del Smart Contract(s), lanzamos

```bash
cd proyecto
./node_modules/.bin/solhint "contracts/**/*.sol"
./node_modules/.bin/solhint contracts/MyToken.sol
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

### **con solium**

Este paquete está disponible para instalar con npm e incluye un plugin de análisis de seguridad

```bash
npm install --save-dev ethlint
./node_modules/.bin/solium --version
```

Lo primero es inicializar el directorio como proyecto solium. lo que generará un par de ficheros de configuracion: .soliumrc.json y .soliumignore

En el fichero .soliumrc.json podremos indicar que tipo de análisis realizar (el más usual es "solhint:recommended"

```bash
cd proyecto
./node_modules/.bin/solium –init
```

Usaremos la carpeta contracts-coverage-demo

Para generar un informe en formato Markdown del estado del Smart Contract(s), lanzamos

```bash
cd proyecto
./node_modules/.bin/solium -d contracts/
./node_modules/.bin/solium -f contracts/CrowFunding.sol
```

y si queremos que intente arreglar los errores de modo automático

```bash
cd proyecto
./node_modules/.bin/solium -d contracts/ --fix
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

## Pruebas de seguridad

### **con solidity-analyzer**

Este paquete está disponible para instalar con npm

```bash
npm install --save-dev solidity-analyzer
```

Además copiaremos los ficheros cli.js e index.js del directorio "solidity-analyzer-dir" al raiz del proyecto. Estos ficheros están disponibles (source) en <https://github.com/quantstamp/solidity-analyzer> juntamente con el fichero lib/astvisitor.js que está ya incluido en este repositorio

Usaremos como contratos de ejemplo los existentes en contracts-analyzer-demo

Para ejecutar el análisis haremos

```bash
node cli.js contracts/Contrato.sol
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)

### **con Mythrill**

Para instalar la herramienta en local debemos usar python3

```bash
pip3 install mythril && myth version
```

o usar una pre-instalación con docker (que necesita docker instalado en local):

```bash
docker pull mythril/myth
docker run mythril/myth –truffle
```

Usaremos los contratos existentes en contracts-demo-mythril.

Para lanzar esta herramienta (versión local) usaremos:

```bash
myth list-detectors
myth analyze <solidity-file>
myth analyze <solidity-file> --solv "0.5.0" -o markdown >myth_analyze_output.md
```

Si queremos analizar una única vulnerabilidad con los detectores que tenemos:

```bash
myth analyze –mEtherThief TokenSale.sol
myth analyze –mEtherThief –t3 TokenSale.sol
```

[Subir](#unir-curso-experto-desarrollo-aplicaciones-blockchain)