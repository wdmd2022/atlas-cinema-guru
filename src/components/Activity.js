import './components.css'
import React from 'react';

const Activity = ({ activity }) => {
    const dateString = activity.updatedAt;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    let listName = "Watch later";
    if (activity.ActivityType === "favorite") {
        listName = "favorites";
    }
    return (
        <li className='activity-list-item'>
            <p><span className='red-text'>{activity.user.username}</span> added <span className='red-text'>{activity.title.title}</span> to {listName} - {formattedDate}</p>
        </li>
    )
}
