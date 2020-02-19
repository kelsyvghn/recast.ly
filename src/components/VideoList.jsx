// var videos = exampleVideoData
import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '/src/data/exampleVideoData.js';
// const videos = exampleVideoData;
// const listVideos = videos.map((video) =>

//   <h5>  <VideoListEntry image={video.snippet.thumbnails.default.url} title={video.snippet.title} description={video.snippet.description} /></h5>
// );

// var VideoList = () => (
//   <div className="video-list">
//     <div>
//       {listVideos}</div>

//   </div>
// );

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.listVideos = props.videos.map((video) =>
      <h5 onClick={props.handleClick}> <VideoListEntry image={video.snippet.thumbnails.default.url} title={video.snippet.title} description={video.snippet.description} /></h5>
    );
  }

  render() {
    return (
      <div className="video-list">
        <div>
          {this.listVideos}</div>
      </div>
    );
  }


}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// var VideoEntry = (props) => {
//   var video = props.videos;

// }


// / A function component using an ES2015 (ES6) arrow function:
// var Aquarium = (props) => {
//   var fish = getFish(props.species);
//   return <Tank>{fish}</Tank>;
// };

// // Or with destructuring and an implicit return, simply:
// var Aquarium = ({species}) => (
//   <Tank>
//     {getFish(species)}
//   </Tank>
// );

// // Then use: <Aquarium species="rainbowfish" />
