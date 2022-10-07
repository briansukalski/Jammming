import {Component} from 'react';
import './Track.css';

export class Track extends Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/*Track name goes here*/}</h3>
                    <p>{/*Track artist goes here*/} | {/*Track album goes here*/}</p>
                </div>
                <button className="Track-action">{/*+ or - goes here*/}test</button>
            </div>
        );
    }

    renderAction() {
        if (this.isRemoval) {
            content = '-';
        }
        else {
            content = '+';
        }
        return <button className="Track-action">{content}</button>;
    }
}