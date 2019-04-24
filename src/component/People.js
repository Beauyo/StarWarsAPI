import React from 'react'
import axios from 'axios';
import { Table, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import planet from './PlanetShow'
class People extends React.Component {
    state = { people: [] }


    componentDidMount() {
        axios
        .get(`https://swapi.co/api/people`)
            .then( res => this.setState({ people: res.data.results }))
    }

    render() {
        const { people } = this.state
        return (
            <>
            <Container style={{ paddingBottom: '5em'}}>
                <Header textAlign='center' style={{ fontSize: '8em'}}> STAR WARS CHARACTERS! </Header>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>HOME PLANET</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { people.map(people =>
                                <Table.Row>
                                    <Table.Cell>
                                        { people.name }  
                                    </Table.Cell>
                                    <Table.Cell>
                                    <Link to={`/planets/${planet.id}`}>
                                            { people.homeworld } 
                                        </Link> 
                                    </Table.Cell>
                                </Table.Row>
                            )}    
                        </Table.Body>
                    </Table>
                </Container>
            </>
        )
    }
}

export default People