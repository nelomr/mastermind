# mastermind
MasterMind is a logic board game from the 70’s in which you have to correctly guess a random secret code in a determined number of guesses. This game can be played by two players, the code-maker and the code- breaker.
- The code-maker creates the secret combination, composed by a sequence of 4 colored pegs
- The code-breaker makes a series of guesses, each guess composed in the same way by 4 colores pegs. After each guess, the code-maker gives feedback to the code-breaker to see how close you got to the real secret code.

### Project setup

## How to set up and run the REST API

Requirements: you need to have docker-compose installed in your system. Execute the following commands to have your API up and running.

1- Clone the following github repository: [mastermind-api](https://github.com/Rydra/mastermind-api)

2- In the project root, execute the following command in a separate terminal window (make sure ports 5432 and 8000 are free before running the command):

```
docker-compose -f local.yml up
```
This will download and build all the docker images. When it is done, you will have the REST Api up and running at http://localhost:8000. Use this URL in your frontend to interoperate with the API.

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
