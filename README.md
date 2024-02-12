# Ziel der Aufgabe

In der PDF-Datei 'Aufgabenliste.pdf' sind Wireframe Mockups für die Aufgabenliste dargestellt. Ziel ist es eine Tabelle von Aufgaben zu erstellen. 
Folgende Aktionen sollten möglich sein:

1. Aufgaben erstellen
2. Aufgaben bearbeiten
3. Aufgaben löschen

## Weitere Informationen

1. In der Spalte `Verantwortlich` soll der Name einer Person angezeigt werden, aber vom Backend wird nur die ID der Person bereitgestellt.
2. `Fälligkeit` ist ein Datum und kommt vom Backend als String. Wenn die Aufgabe überfällig ist, sieht der Nutzer "Überfällig" und nicht mehr das Datum.
3. `Status` ist ein boolean aber der Nutzer sieht entweder "Erledigt" oder "Offen".

## APIs

Um das "Backend" laufen zu lassen: `node server.js`

Es gibt zwei APIs: `http://localhost:3004/todos` und `http://localhost:3004/persons`. Die APIs geben JSON zurück und können auch im Browser aufgerufen werden.

Die APIs haben die folgende Routes:

````
GET    /todos
GET    /todos/1
POST   /todos
PUT    /todos/1
PATCH  /todos/1
DELETE /todos/1
````

````
GET    /persons
GET    /persons/1
POST   /persons
PUT    /persons/1
PATCH  /persons/1
DELETE /persons/1
````


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Further information 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
