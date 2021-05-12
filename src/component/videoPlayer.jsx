import { fakeData } from '../fakeData';
import '../style/videoPlayer.css';

function VideoPlayer({ video }) {
  if (!video) { return '비디오 없음'; }
  return (
    <section className="player">
      <div className="screen-container">
        <iframe className="player__screen" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen />
      </div>
      <h1 className="player__title">{video.snippet.title}</h1>
      <p className="player__description">{video.snippet.description}</p>
    </section>
  );
}

export default VideoPlayer;