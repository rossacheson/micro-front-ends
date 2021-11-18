This codebase shows a viable microfrontend architecture as demonstrated by Stephen Grider in 'Microfrontends with React: A Complete Developer's Guide' (https://www.udemy.com/course/microfrontend-course/).

You can view the deployed application here: https://d2k7v9rfg1irjx.cloudfront.net/

We use React for a Container app, as well as for the Marketing and Auth microfrontends. We use Vue for the Dashboard microfrontend.

We use Webpack for building individual apps and Webpack's ModuleFederationPlugin for creating modules that the Container can consume.

We use Github Workflows for CI/CD.

The application is designed to meet these requirements:
1. Zero coupling between child projects
2. Very limited coupling between container and child apps, i.e. using simple callbacks to communicate up and down, and making no assumptions about frameworks used by the child apps. 
3. CSS from one project shouldn't affect another