// TODO: Render the `App` component to the DOM
import App from './components/App.js';



ReactDOM.render(< App />, document.getElementById('app'));


//You're going to use the sample data in src/data/exampleVideoData.js to build out the stateless functional VideoList and VideoListEntry components.

/*  Include src/data/exampleVideoData.js in index.html so it can be used by your React components
Pass exampleVideoData into the VideoList component
Refactor the VideoList component to dynamically render one VideoListEntry component for each video object in exampleVideoData
Refactor the VideoListEntry component to dynamically render based on the video object it receives
Make sure the tests for VideoList and VideoListEntry are passing. You can open the tests with npm test */

//babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline --watch
