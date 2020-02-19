import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
// import exampleVideoData from '/src/data/exampleVideoData.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em> </em> <Search /></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> <VideoPlayer video = {null}/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> <VideoList /> </h5></div>
      </div>
    </div>
  </div>
);

// class App extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       value: null,
//     };
//   }
//   render () {
//     return (
//       <
//     )
//   }




//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <div><h5><em> </em> <Search /></h5></div>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <div><h5><em>videoPlayer</em> <VideoPlayer video={null} /></h5></div>
//           </div>
//           <div className="col-md-5">
//             <div><h5><em>videoList</em> <VideoList /> </h5></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


