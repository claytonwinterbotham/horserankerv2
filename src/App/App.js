import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { AdminPage } from '../AdminPage';
import { HorseListPage } from '../HorseListPage';
import { HorseDetailPage } from '../HorseDetailPage';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AboutPage } from '../AboutPage';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/admin" component={AdminPage} />
                    {/* <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />    */}
                    <Route path="/horsedetail" component={HorseDetailPage} />
                    <Route path="/horsedata" component={HorseListPage} />
                    <Route exact path="/" component={HomePage} />
                </Switch>    
            </Router>  
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
