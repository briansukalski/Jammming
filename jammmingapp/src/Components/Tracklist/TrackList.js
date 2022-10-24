import {Component} from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends Component {
    render() {
        const tracks = this.props.tracks.map(thisTrack  => <Track track={thisTrack} key={thisTrack.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>);
        return (
            <div className="TrackList">
                {this.props.isRemoval}
                {tracks}
            </div>
        );
    }
}