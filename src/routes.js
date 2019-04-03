import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from '../src/Components/Auth/Auth';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Form from '../src/Components/Form/Form';
import Post from '../src/Components/Post/Post';

export default (
    <Switch>
        <Route component = { Auth } exact path = '/'/>
        <Route component = { Dashboard } path = '/dashboard' />
        <Route component = { Post } path = '/post/postid' />
        <Route component = { Form } path = '/new'/>
    </Switch>
)