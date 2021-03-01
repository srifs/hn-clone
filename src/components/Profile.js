import React from 'react';
import { userDetail } from '../utils/apis';
import { useEffect, useState } from 'react';

const Story = ({ id }) => {

    const [user, setUser] = useState({
        name: "",
        created: "",
        karma: ""
    });

    useEffect(() => {
        userDetail(id)
            .then((user) => {
                var createDate = new Date(user.created * 1000);
                setUser({
                    name: user.id,
                    date: createDate.getDate().toString(),
                    day: createDate.getDay().toString(),
                    year: createDate.getFullYear().toString(),
                    karma: user.karma
                });
            })
    }, [id]);
    return (
        <div className="story">
            {user.name} registed with us on {user.date}-{user.day}-{user.year} and has {user.karma} karma
        </div>
    );
};

export default Story;
