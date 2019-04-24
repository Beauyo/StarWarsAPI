import React from 'react'
import axios from 'axios';
import { Card } from 'semantic-ui-react'

class People extends React.Component {
    state = { persons: {} }


    componentDidMount() {
        axios.get(`https://swapi.co/api/people`)
            .then( res => this.setState({ persons: res.data }))
    }

    render() {
        const { persons } = this.state
        return (
            <>
                <Card>
                { persons.map(persons =>
                        <Card.Content key={ persons.id }>
                            { persons.name }
                        </Card.Content>
                    )}
                </Card>
            </>
        )
    }
}

export default People