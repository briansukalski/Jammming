import {Component} from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends Component {
    render() {
        const tracks = this.props.tracks.map(thisTrack  => <Track track={thisTrack} key={thisTrack.id} />);
        return (
            <div className="TrackList">
                {tracks}
            </div>
        );
    }
}