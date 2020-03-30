A JS project to discover and define clean architecture patterns in a vanilla JS environment with a Usecase driven philosophy and inspired from "Uncle" Bob Martin's teachings. This example trys to show the power, flexibility, and richness of JavaScropt without frameworks and overuse of NPM packages.

This project will be continued to be fleshed out to create an application for tracking and scheduleing personal activities to help form healthy habbits and deminish unhealthy ones.

## Tests
From the root directory run 'npm run tests' to test the code in the 'core' directory.

## Strucutre
One example of clear architecture should be shown in the directory structure. 

### /core
This directory holds all common data structures and Application Independent Business Rules such as Entities, Data Structures, and Use Cases

### /web
This directory pulls from '/core' to power the Application Specific business rules to create a browser/electron application. This sub-project seeks to only use features for creating Views, Controllers, and Presenters with technologies avalible on the platform (web) and not use MV* Frameworks (React/Vue/Angular). Instead we use native Web Components. The only technology used that is used that is not avalible on the platform is Babel and Webpack, to bundle files and primarily pull in HTML files to View Classes to act as templates. This is done to avoid creating template elements inside of a 'master' HTML file. This way we can keep our files cleaner and easier to navigate. This method is not needed for the project but as a slight convienence without letting Frameworks dominate the code. 

To run the web app, navigate to 'src/web' and run 'npm start' to run the webpack-dev-server.