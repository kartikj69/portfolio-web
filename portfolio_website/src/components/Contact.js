import React, { Component } from 'react';

class Contact extends Component {
    constructor(){
        super();

        this.state={
            name:"",
            email:"",
            discription:"",
            submitMessage:"",
            submitMessageColor:"",
        };
    }
    onNameChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value,
            [event.targetemail]:event.target.email,
            [event.targetdiscription]:event.target.discription,
        });
    };
    onSubmit=(event)=>{
        event.preventDefault();
        let isSucess = true;
        if (isSucess){
            this.setState({
                submitMessage:`Thankyou. I will contact you soon!`,
                submitMessageColor:"text-warning",
            });
        }
        else{
            this.setState({
                submitMessageColor:"text-danger",
                submitMessage:"Something went wrong , please try again later :*"
            })
        }
    };
  render() {
      const { submitMessage, submitMessageColor}=this.state;
    return (
      <div className='container my-5'>
          <h1 className='font-weight-light text-center py-5'><span className='text-warning'>Thank you!</span>for your interest
          </h1>
          <div className='row justify-content-center'>
              <div className='col-11 col-lg-5'>
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                          <label htmlFor="name">
                              Name*
                          </label>
                          <input type="text" 
                          name='name' 
                          className='form-control' 
                          onChange = {this.onNameChange} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">
                              Email*
                          </label>
                          <input type="text" name='email' className='form-control' onChange = {this.onNameChange} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="discription">
                              Tell me about your project*
                          </label>
                          <textarea name="discription" className='form-control' rows="5" onChange = {this.onNameChange}></textarea>
                      </div>
                      <button type='submit' className='btn btn-dark float-right' style={{backgroundColor:"black"}}>
                          Let's talk business
                      </button>
                  </form>
              </div>
          </div>
          <div className="py-5 mx-2 text-center">
              <h5 className= {submitMessageColor}>{submitMessage}</h5>
          </div>
      </div>
    )
  }
}

export default Contact;
