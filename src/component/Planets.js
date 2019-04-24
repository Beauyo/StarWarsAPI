import React from 'react'
import axios from 'axios';
import { Card, Table, Header } from 'semantic-ui-react'

class Planets extends React.Component {
    state = { planets: [] }

    componentDidMount() {
        axios.get(`https://swapi.co/api/planets`)
            .then( res => this.setState({ planets: res.data.results }))
    }

    render() {
        const { planets } = this.state
        return (
            <>
                <Header>
                    <Table>
                        <Table.Header>
                            <Table.HeaderCell>
                                Planet Name 
                            </Table.HeaderCell>
                        </Table.Header>
                            <Table.Body>
                            { planets.map(planets =>
                                    <Table.Row>
                                        <Table.Cell>
                                            { planets.name }
                                        </Table.Cell>
                                        <Table.Cell>
                                            { planets.climate }
                                        </Table.Cell>
                                        <Table.Cell>
                                            { planets.diameter }
                                        </Table.Cell>
                                    </Table.Row>
                                    )}
                            </Table.Body>
                        </Table>
                </Header>
            </>
        )
    }
}

export default Planets