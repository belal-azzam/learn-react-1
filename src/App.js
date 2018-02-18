import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state = {
        persons: [
            { id: '1', name: 'max', age:28},
            { id: '2', name: 'belal', age:22},
            { id: '3', name: 'mezo', age:24},
        ],
        showPersons: false
    }

    deletePersonHandler(personIndex)
    {
        const persons = this.state.persons.slice();
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) =>
    {
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id ;
        });
        const person = {...this.state.persons[personIndex]}
        person.name = event.target.value ;
        const persons = [...this.state.persons];
        persons[personIndex] = person ;
        this.setState({persons: persons});

    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow});

    }

  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        let persons = null;

        if(this.state.showPersons){
            persons = (
            <div>
                {this.state.persons.map( (person, index) => {
                  return <Person
                      key={person.id}
                      click={ () => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      changed={(event) => this.nameChangedHandler(event,person.id)}
                  />
                })}

            </div>
            );
        }

    return (
        <div className="App">
        <h1>hello i am a react app</h1>
         <p>this is rly working</p>
            <button
                style={style}
                onClick={this.togglePersonHandler }>Switch Name</button>
            {persons}
        </div>
    );
    //   return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi i am react app'))
  }
}

export default App;
