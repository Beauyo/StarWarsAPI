import React from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

class Planets extends React.Component {
    state = { planets: [] }


    componentDidMount() {
        axios.get(`https://swapi.co/api/planets`)
            .then(res => this.setState({ planets: res.data }))
    }

    render() {
        const { planets } = this.state
        return (
        <>
            <Card>
                { planets.map( planets => 
                    <Card.Content key={planets.id}>
                        { planets.name }
                    </Card.Content>
                )}
            </Card>
        </>
        )
    }
}

export default Planets