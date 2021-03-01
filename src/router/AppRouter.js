import { React, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';
import Profile from '../components/Profile';

const AppRouter = () => {
    const [search, setSearch] = useState('');
    
    return (
        <BrowserRouter>
            <div className="container">
                <Header search={setSearch}/>
                <Switch>                    
                    <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
                    <Route path="/profile/:id" render={({ match }) =>
                        {
                            const { id } = match.params;
                            return <Profile id={id} />
                        }}
                    />
                    <Route
                        path="/:type"
                        render={({ match }) => {
                            const { type } = match.params;
                            if (!['top', 'ask', 'show', 'job'].includes(type)) {
                                return <Route component={PageNotFound} />;
                            }
                            return <ShowStories type={type} search={ search }/>;
                        }}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
