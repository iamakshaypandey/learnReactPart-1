import React, { Component } from 'react'

// class FormComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {value:''}
//         this.handleChang = this.handleChang.bind(this)
//         this.handleSubmit= this.handleSubmit.bind(this)
//     }

//     handleChang(event){
//         this.setState({value:event.target.value})
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//       }
    
//   render() {
//     return (
//       <div>
//          <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChang} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       </div>
//     )
//   }
// }

// export default FormComponent


class FormComponent extends Component {
        constructor(props){
            super(props)
            this.state = {
                user:'',
                comments: '',
                topics : ''

        }
        }
    
        handlerChange = (event)=>{
            this.setState({
                user:event.target.value

            })
        }

        handlerChangeComments=(event)=>{
            this.setState({
                comments:event.target.value
            })
        }

        handlerChangeSelect = event => {
            this.setState({
                topics:event.target.value
            })
        }

        CLickSubmit = event =>{
            alert(`${this.state.user} ${this.state.comments} ${this.state.topics}`)
            event.preventDefault()
        }

      render() {
          const {user,comments,topics} = this.state
        return (
          <div>
             <form action="" onSubmit={this.CLickSubmit}>
                 <div>
                    <label htmlFor="">user name</label>
                    <input type="text" value={user} onChange = {this.handlerChange}/>
                 </div>
                 <div>
                     <label htmlFor="">comments</label>
                     <textarea value={comments} onChange={this.handlerChangeComments}></textarea>
                 </div>
                 <div>
                     <label htmlFor="">Topic</label>
                     <select value={topics} onChange={this.handlerChangeSelect}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                 </div>
                 <button>submit</button>
             </form>
          </div>
        )
      }
    }
    
    export default FormComponent