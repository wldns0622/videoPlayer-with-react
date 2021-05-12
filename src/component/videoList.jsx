import { fakeData } from '../fakeData';
import Video from './video';

function VideoList() {
  return (
    <ul className="videoList">
      { fakeData.map((video) => <Video />)}
    </ul>
  );
}

export default VideoList;