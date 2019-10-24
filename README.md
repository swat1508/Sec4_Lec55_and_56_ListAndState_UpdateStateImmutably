Sec4-Lec55 ==>  List & State and Sec4-Lec- 56 ==> Updatig State Immutably
=========================================================================
In Sec4-Lec54, we learnt to map an array into JSX array. Now in this we will see
how to manipulate the array - say deleting the component on click of that component.

we will remove the method "switchNameHandler" and add a new method "deletePersonHandler"
this will aim to delete a person from the array of person

So , in Person_Prop.js 
const personProp = (props) => {
  return (
    <div className="Person">  
  <p onClick={props.click}> I am {props.name} and I am { props.age} years old</p>

there won't be any change as onClick={props.click} which was earlier for 
 "switchNameHandler" will now be used for "deletePersonHandler" 
 with below changes :

Change1
--------
this.state.persons.map(person => {
                      return <PersonProp 
                                  name={person.name} 
                                  age={person.age}/>
will be changed to below :

this.state.persons.map(person => {
                      return <PersonProp 
                                  name={person.name} 
                                  age={person.age}
                                  click={this.deletePersonHandler} />

Change2
--------
 this.state.persons.map(person => {
                      return <PersonProp 
                                name={person.name} 
                                age={person.age} />
          })

will be changed to 

 this.state.persons.map( (person,index) => {
                      return <PersonProp 
                                  name={person.name} 
                                  age={person.age}
                                  click={ () => this.deletePersonHandler(index) } />
i.e person and index both are passed and click property added for "deletePersonHandler"

Change 3
--------
We will add the new method "deletePersonHandler" as below :
deletePersonHandler = (personIndex) =>{
const persons = this.state.persons;
persons.splice(personIndex,1);
this.setState({persons : persons});
}


this will work well and on click of component it will get deleted. However this is not recommended because :

In JS, object and array are reference types so when we get persons
const persons = this.state.persons;
we are getting a pointer to original person object managed by React 
when we do splice  ==> persons.splice(personIndex,1);
we are mutating the original data which is not good so we will follow 
either of below  :

i) Using slice
----------
The slice() method returns the selected elements in an array, as a new array object.
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
Note: The original array will not be changed.

// const persons = this.state.persons;
   const persons = this.state.persons.slice();

ii) Using spread operator (ES6 feature)
---------------------------------------
//   const persons = this.state.persons;
//   const persons = this.state.persons.slice();
     const persons = [...this.state.persons];

So, by the above two ways of either using "slice" or "spread operator" , we are updating state in an immutable fashion which is expcted.


We can still see two warning in console :
i)  Warning: Each child in a list should have a unique "key" prop.
ii) Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly

We will try to fix the above two in next chapter - "Sec4-Lec57 and Sec4-Lec58"
