# Giphy Love
> For the love for giphs.

## Run the simple demo
https://giphy-love.herokuapp.com/

![DEMO](https://giphy-love.herokuapp.com/)

## Pre-requisite
  node expected version: `"^6.14.0 || ^8.10.0 || >=9.10.0"`.

## Setup
```bash
  # clone the repository
  λ git clone https://github.com/m-nathani/giphy-love
  # change the current directory
  λ cd giphy-love
  # install all dependencies
  λ yarn install
  # run the project
  λ yarn start
```

## Structure
```bash
.
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── action          # folder that contains all redux actions
│   ├── component       # directory that holds all components
│   ├── config          # contains configuration files for client-side
│   ├── constant        # contains all constants, can be both server and client side
│   ├── container       # wraps all redux containers
│   ├── images          # folder with all images
│   ├── middleware      # folder with all middlewares
│   ├── reducer         # directory that contains all redux reducers
│   └── service         # contains all the backend service logic
│   └── store           # wraps store configuration for redux
│   └── route           # contains all routes for redux app
└── webpack             # contains all webpack configurations
```

## Scripts

- `yarn start` - builds the redux app in development mode
- `yarn run lint` - lints all the files in `src/` folder
- `yarn run lint:fix` - fixes all the possible linting errors
- `yarn run serve` - serves the files in the `dist/` folder

## Support
> This project initial structure was forked from [frontend-boilerplate](https://github.com/umayr/frontend-boilerplate)
