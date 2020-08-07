import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/Profile.jpeg';
/*
class RegularClass{}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance)
console.log('componentClassInstance', componentClassInstance)
*/

class App extends Component {

    state = { displayBio: false};

/*    constructor(){
        super();
        this.state = { displayBio: false};
        console.log('Component this', this);
        //this.readMore = this.readMore.bind(this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

        this.toggleDisplayBio = () => { ... };
    }
*/
/*    
    readMore(){
        //this.setState({displayBio:true});
        console.log('readMore this', this);
        this.setState({displayBio:true});
    }
*/
    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!!</h1>
                <p> My Name is Kushal Dhar Chowdhury. I'm a Software Engineer</p>
                <p> I am always looking to learn new technologies and implement the same!!</p>
                {
                    this.state.displayBio ? (
                <       div>
                            <p>I live in Pune, Hometown is Kolkata!!</p>
                            <p>Besides coding, I Love playing games!!</p>
                            <button onClick={this.toggleDisplayBio}>Read Less</button>    
                        </div>
                    ):(
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;