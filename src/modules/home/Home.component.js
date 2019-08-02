
// Imports React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    Bem vindo caraio
                    <iframe src="https://giphy.com/embed/l3vRm6y7GBHKboqd2" width="100%" height="500" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/southparkgifs-l3vRm6y7GBHKboqd2">via GIPHY</a></p>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(HomeComponent)