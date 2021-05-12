import { fakeData } from '../fakeData';
import '../style/videoList.css';
import Video from './video';

function VideoList({ videos }) {
  return (
    <ul className="videoList">
      { videos.map((video) => <Video key={video.etag} video={video} />)}
    </ul>
  );
}

export default VideoList;