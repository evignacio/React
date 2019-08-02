
// Imports React
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom';

// Import Imagens
import logo from './imagens/logo.svg';

// Import Css
import './App.component.css';

class AppComponent extends Component {

    state = {
        homeText: "Home",
        listaText: "Lista",
        detalheText: "Detalhe",
    }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} width="30" />
                        <ul>
                            <li>
                                <a href='/home'>{this.state.homeText}</a>
                            </li>
                            <li>
                                <a href='/lista'>{this.state.listaText}</a>
                            </li>
                            <li>
                                <a href='/detalhe/1'>{this.state.detalheText}</a>
                            </li>
                        </ul>
                    </header>

                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default withRouter(AppComponent);
