
// Imports React
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom';

// Import Axios
import axios from 'axios'

class ListaComponent extends Component {

    state = {
        dados: []
    }

    componentWillMount() {
        this.getDadosGit();
    }

    getDadosGit() {
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then(function (response) {
            console.log(response.data);

            this.setState({
                dados: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    Listagem
                </div>
            </Fragment>
        );
    }
}

export default withRouter(ListaComponent);
