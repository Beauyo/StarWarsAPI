import React from 'react'
import axios from 'axios';

class HomeWorld extends React.Component {
    state = { planets: [] }
    
   componentDidMount(id) {
    axios.get()
    .then( res => this.setState({ planets: res.data.results }))
   }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default HomeWorld