import React, { Component } from 'react';
/*
import logo from './logo.svg';  ==> deleting logo.svg file as not needed */
import './App.css';
import MyPerson from './Person/Person';
import PersonProp from './Person/Person_Props';


class App extends Component {

  state = {
    persons:[
      {name:'Max' , age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:26}
    ],
    otherState : 'some other value',
    showPersons:false
  }

switchNameHandler = (newName) => {
  console.log('Button Clicked !!! ');
  this.setState({
    persons:[
      {name: newName, age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:27}
    ]
  })
}

deletePersonHandler = (personIndex) =>{
// const persons = this.state.persons;
/* this will work but its like  mutating the original data which is not good
   so we will use below slice to get a new array instead of original data */

// const persons = this.state.persons.slice();
/* The above ==> const persons = this.state.persons.slice();
will also work well but we will use new ES6 feature of triple dots as below :*/
const persons = [...this.state.persons];

persons.splice(personIndex,1);
this.setState({persons : persons});
}

nameChangedHandler = (event) => {
  this.setState({
    persons:[
      {name: 'Max', age:28},
      {name:event.target.value , age:29},
      {name:'Stephanie' , age:26}
    ]
  })
}


togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}
  render() {
          const style = {
              backgroundColor : 'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
let persons=null;
if(this.state.showPersons){
persons=(
    <div>
      {
          this.state.persons.map( (person,index) => {
                      return <PersonProp
                                  name={person.name}
                                  age={person.age}
                                  click={ () => this.deletePersonHandler(index) } />
          })
      }

    </div>
      );
}

return (
  <div className="App">

<h2> Using State </h2>
<h1>Hi I am reactApp</h1>
<h1>This is really working !!!!</h1>



<button
style={style}
onClick={this.togglePersonsHandler}>Toogle Persons </button>
{persons}
      </div>
    );
  }
}

export default App;
