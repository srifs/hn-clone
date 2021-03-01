import axios from 'axios';

const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';


const getStory = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return story;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};

export const getStories = async (type) => {
    try {
        const { data: storyIds } = await axios.get(
            `${BASE_API_URL}/${type}stories.json`
        );
        const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
};

export const userDetail = async (id) => {
    try {
        const user = await axios.get(`${BASE_API_URL}/user/${id}.json`);
        return user.data;
    } catch (error) {
        console.log('Error while getting a user.');
    }
};