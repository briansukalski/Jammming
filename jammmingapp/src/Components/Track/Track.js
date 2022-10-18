import {Component} from 'react';
import './Track.css';

export class Track extends Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{/*+ or - goes here*/}test</button>
            </div>
        );
    }

    renderAction() {
        let content;
        if (this.isRemoval) {
            content = '-';
        }
        else {
            content = '+';
        }
        return <button className="Track-action">{content}</button>;
    }
}