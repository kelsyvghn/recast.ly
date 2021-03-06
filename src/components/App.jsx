import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.exampleVideoDataCopy = exampleVideoData.slice();
    this.state = {
      value: this.exampleVideoDataCopy[0].id.videoId,
      title: this.exampleVideoDataCopy[0].snippet.title,
      description: this.exampleVideoDataCopy[0].snippet.description
    };
    this.handleClick = this.handleClick.bind(this);
    this.videoList = <VideoList videos={this.exampleVideoDataCopy} handleClick={this.handleClick} />;
  }

  handleClick(e) {

    //exampleVideoData.findIndex()
    var titleArray = this.exampleVideoDataCopy.map(video => video.snippet.title);
    var getTitle = e.target.innerHTML;
    var indexOfTitle = titleArray.indexOf(getTitle);
    this.setState({
      title: getTitle,
      description: this.exampleVideoDataCopy[indexOfTitle].snippet.description,
      value: this.exampleVideoDataCopy[indexOfTitle].id.videoId
    });
    // this.exampleVideoDataCopy.unshift(nowPlaying);

  }




  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em> </em> <Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Play</em> <VideoPlayer videoId={this.state.value} description={this.state.description} title={this.state.title} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Videos</em> {this.videoList} </h5></div>
          </div>
        </div>
      </div>
    );

  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


