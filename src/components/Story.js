import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);

const Story = ({ story: { id, by, title, kids, time, url, score } }) => {
    return (
        <div className="story">
            <div className="story-title">
                <Link url={url} title={title} />
            </div>
            <div className="story-info">
                <span>
                    {score}
                    {` `}
                    Points |
                </span>
                <span>
                    by{' '}
                    <NavLink to={ `/profile/${by}` } activeClassName="active">
                        { by }
                    </NavLink>
                    |
                </span>
                |<span>
                    {new Date(time * 1000).toLocaleDateString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                    |
                </span>|
                <span>
                    <Link
                        url={`https://news.ycombinator.com/item?id=${id}`}
                        title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
                    />
                </span>
            </div>
        </div>
    );
};

export default Story;
