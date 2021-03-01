import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';

const ShowStories = ({ type, search }) => {
  const { isLoading, stories } = useDataFetcher(type);
    
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
            {
              stories.map(({ data: story }) => {
                if (search) {
                  return (story.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1) ? <Story key={story.id} story={story} /> : '';
                }
                else
                  return <Story key={story.id} story={story} />
              })
            }
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;
