This codebase shows a viable microfrontend architecture as demonstrated by Stephen Grider in 'Microfrontends with React: A Complete Developer's Guide' (https://www.udemy.com/course/microfrontend-course/).

We use React for a Container app, as well as for the Marketing and Auth microfrontends. We use Vue for the Dashboard microfrontend.

We use Webpack for building individual apps and Webpack's ModuleFederationPlugin for creating modules that the Container can consume.

We use Github Workflows for CI/CD.