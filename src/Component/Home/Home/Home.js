import React from 'react';
import BlogsView from '../BlogsView/BlogsView';
import Header from '../Header/Header';
import OverviewProjects from '../OverviewProjects/OverviewProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OverviewProjects></OverviewProjects>
            <BlogsView></BlogsView>
        </div>
    );
};

export default Home;