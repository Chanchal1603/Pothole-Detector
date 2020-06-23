import React from 'react';
import Header from './component/header/header.component.jsx';
import Report from './component/report/report.component.jsx';
import './App.css'
import { Switch, Route ,Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import SignInAndSignUpPage from './component/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component{


  constructor()
  {
      super();
      this.state = 
      {
          currentUser:null,
          name:'',
          location:'',
          imageUrl:''

      };
  }

  handleChange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }
  handleUploading = (state)=>
  {
    const imageUrl = state.url;
    this.setState({imageUrl});
    console.log(this.state);
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);
       this.setState({currentUser:userAuth});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state.currentUser);
        });
      }
      else{
        this.setState({ currentUser: userAuth });
      }
      console.log(this.state.currentUser);
     
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

   render(){
    return (
      <div className="App">
     <Header currentUser={this.state.currentUser}/>
    
     <switch>
     <Route exact path='/' render={(props)=> <Report {...props} state={this.state} handleChange={this.handleChange} handleUploading={this.handleUploading}/>}/>
     <Route
     exact
     path='/signin'
     render={() =>
       this.state.currentUser ? (
         <Redirect to='/' />
       ) : (
         <SignInAndSignUpPage />
       )
     }
   />
     </switch>

     
      </div>
    );

  
  }
 
} 

export default App;
