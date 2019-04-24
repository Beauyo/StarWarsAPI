import React from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class PlanetShow extends React.Component {
    state = { planet: [] }


    componentDidMount() {
        const { id } = this.props.match.params
        axios
        .get(`https://swapi.co/api/planets${id}`)
            .then(res => this.setState({ planets: res.data.results }))
    }

    render() {
        const { planet } = this.state
        return (
        <>
            <Card>
                { planet.map( planet => 
                    <Card.Content key={planet.id}>
                            { planet.name }
                    </Card.Content>
                )}
            </Card>
        </>
        )
    }
}

export default withRouter(PlanetShow)