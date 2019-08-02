
// Imports React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DetalheComponent extends Component {
    state = {
        idParam: 0
    }

    componentDidMount(){
        let _idParam = this.props.match.params.ronaldo;

        this.setState({
            idParam: _idParam
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    Página de Detalhe <br /><br />
                    {this.state.idParam}
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(DetalheComponent)