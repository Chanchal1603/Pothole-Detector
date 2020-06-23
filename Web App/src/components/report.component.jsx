import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './report.styles.css';
import {storage} from '../../firebase/firebase.utils.js';

class Report extends React.Component{

    constructor()
    {
        super();
        this.state =
        {
            image:null,
            url: null,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.handleUpload =  this.handleUpload.bind(this);
    }


        changeHandler = e =>
        {
            if(e.target.files[0])
            {
                const image = e.target.files[0];
                this.setState(({image:image}));
            }
        }

        handleUpload = () =>
        {
            const {image} = this.state;
           const uploadTask = storage.ref(`images/${image.name}`).put(image);
           uploadTask.on('state_changed',
           (snapshot) => {},(error)=>{console.log(error)},()=> {
               // complete function
               storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                   this.setState({url:url});
                   console.log(url);
               })
           }
            );
            this.props.handleUploading(this.state);
        }

        handleFinal = () =>
        {
            const currentUser = this.props.state.currentUser;
            const actualName = this.props.state.name;
            const location = this.props.state.location;
            const imageUrl = this.props.state.imageUrl;
            if(!currentUser)
            {
                alert('Go to SIGN-IN/SIGN_UP Page ');
            }
             else if(imageUrl!=='' && actualName!=='' && location!=='')
             {
                alert(`Thanks ${actualName} for showing your intrest. We will validate all details and notify you.`);
             }
             else
             {
                 alert('Please fill all details');
             }
            
        }

   render(){
    return(
       <div className='upper-report'>
       <h1 className='report-header'>Please fill up the detail about Pot Hole</h1>
       <div className='report'>
        
        <form className='input-form'>
        <label className='input-label'>Name:</label>
        <input className='form-input' type='text' name='name' placeholder="Your Name" onChange={this.props.handleChange} required/>
        <label className='input-label'>Location:</label>
        <input className='form-input' type='text' name='location' placeholder="Your location" onChange={this.props.handleChange} required/>
        
        </form>
        <div className='image-p'>
        <img src={this.state.url || 'https://via.placeholder.com/300x400'} alt='image' height="300" width="400"/>
        </div>
        <div className='image-upload'>
        <label className='input-label'>Image Upload:</label>
        <input className='image-input'  type='file' name='image' onChange={this.changeHandler}/>
        <CustomButton onClick={this.handleUpload}>Upload</CustomButton>
       
        </div>
        <div className='submit-button'>
        <CustomButton onClick={this.handleFinal} isGoogleSignIn>Submit All Details</CustomButton>
        </div>
        
      </div>
      </div>
        
    )
    
   }
  }


export default Report;
