import React from 'react';
// import Participants from './list-store';

function List (props) {
    return (
        <div className="people">
            <img src={props.avatar} alt="avatar" />
            <span>{props.name}</span>
            <span>
                {props.inSession === true ? 'In session' : 'Left session'}
            </span>
            <span>
                {props.onStage === true ? 'On stage' : ''}
            </span>
        </div>
    );
}

export default List;
