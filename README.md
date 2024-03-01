## Assessment 3bird (Frontend for assessment test)

### Brief description

_This application is created with Vite React with typescipt and serves as a frontend service to github search api_

### Tech Stack

- Vite
- React
- tailwind as CSS
- UI components referenced from flowbite (https://flowbite.com/docs/getting-started/introduction/)

### Steps to run the application in development env

1. Make a copy .env.example to .env.local
2. Added neccessary variable to the .env.local file
3. To run on localhost make sure nothing running on port 3000

```
1. yarn
2. yarn dev
This should run your application in http://localhost:3000/
```

### Steps to run the application in production env

```
yarn run build

Then you can use dist folder to deploy in cloud

```

### Steps to run tests

```
yarn run test
```

### Frontend environment variable description

| Name                     | Description         |
| ------------------------ | ------------------- |
| VITE_GITHUB_BASE_API_URL | Github api base url |

### Application Dependencies:

| Dependency Name  | Package Version               | Description                           |
| ---------------- | ----------------------------- | ------------------------------------- |
| axios            | "axios": "^1.6.7"             | Http Request                          |
| date-fns         | "date-fns": "^3.3.1"          | Date formatter                        |
| react            | "react": "^18.2.0"            | SPA UI Library                        |
| react-icons      | "react-icons": "^5.0.1"       | UI icons                              |
| react-router-dom | "react-router-dom": "^6.22.1" | Standard library for routing in React |
| react-markdown   | "react-markdown": "^9.0.1"    | React component to render markdown    |
| remark-gfm       | "remark-gfm": "^4.0.0"        | Remark plugin to support GFM          |
