import {Component} from 'react';
import './Track.css';

export class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }

    renderAction() {
        let content;
        let handlerFunction;
        if (this.props.isRemoval) {
            content = '-';
            handlerFunction = this.removeTrack;
        }
        else {
            content = '+';
            handlerFunction = this.addTrack;
        }
        return <button className="Track-action" onClick={handlerFunction}>{content}</button>;
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
}