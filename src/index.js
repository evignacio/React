
// Imports React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Imports Components
import AppComponent from './App.component';
import ListaComponent from './modules/lista/Lista.component'
import DetalheComponent from './modules/detalhe/Detalhe.component'
import HomeComponent from './modules/home/Home.component';

// Imports Service
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <React.Fragment>
        <Router>
            <AppComponent>
                <Switch>
                    <Route path="/" exact component={HomeComponent} />
                    <Route path="/home" exact component={HomeComponent} />
                    <Route path="/lista" exact component={ListaComponent} />
                    <Route path="/detalhe/:ronaldo" component={DetalheComponent}/>
                </Switch>
            </AppComponent>
        </Router>
    </React.Fragment>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
