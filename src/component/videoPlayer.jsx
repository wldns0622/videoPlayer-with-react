import { fakeData } from '../fakeData';
import '../style/videoPlayer.css';

function VideoPlayer() {
  return (
    <section className="player">
      <iframe src={`https://www.youtube.com/embed/${fakeData[0].id.videoId}`} />
      <h1>{fakeData[0].snippet.title}</h1>
      <p>{fakeData[0].snippet.description}</p>
    </section>
  );
}

export default VideoPlayer;