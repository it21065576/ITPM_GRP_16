import React, { Component } from 'react';
import axios from 'axios';



// Shows details of all recipe...
 class viewUser extends Component{
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/user").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id)=>{
  if (window.confirm('Are you sure?')) {
  axios.delete(`/user/delete/${id}`).then((res)=>{
    alert("Delete Successfully !");
    this.retrievePosts();
  })
}}


filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.transaction_id.includes(searchKey) || post.transaction_id.toLowerCase().includes(searchKey) ||
  post.amount.includes(searchKey) || post.amount.toLowerCase().includes(searchKey) ||
  post.newDate.includes(searchKey) || post.newDate.toLowerCase().includes(searchKey))
  this.setState({posts:result})
}



render(){
    return (
      
      <div className style={{ backgroundColor:'#F1F1F1', backgroundSize: 'cover'}}> <br/>
      <br/>
      <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > User Details</font> </h1> <br/>
      
      
      <div className = "row" style={{marginLeft:"50px", marginRight:"63px"}} >
        
            
   
        
          <div className="container">
          <div className="row">
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                <div style={{width:'50%'}}>

                <ul>
        {this.state.posts.map((post, index) => (
          <li key={index}>
           <div> {index + 1}</div>
            <div style={{paddingTop:'10px'}}>
            <a href="/Profile"><img style={{height: 100, width: 100}} class="rounded-circle" src=".\up.jpeg" href="#"></img></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
               <br/>
               <br/>
              <a href={`/user/${post._id}`}><h4>{post.name}</h4></a>
            </div>
            <br/>
            <div style={{paddingTop:'5px'}}><strong>Address :</strong> {post.address}</div>
            <div style={{paddingTop:'10px'}}><strong>Gender :</strong> {post.gender}</div>
            <div style={{paddingTop:'10px'}}><strong>Age :</strong> {post.age}</div>
            <div style={{paddingTop:'10px'}}><strong>Email :</strong> {post.email}</div>
            <div style={{paddingTop:'10px'}}><strong>Contact Number :</strong> {post.con_no}</div>
            <div style={{paddingTop:'10px'}}><strong>Service Tsype : </strong> {post.service_type}</div>
            <div style={{paddingTop:'10px'}}><strong>Message :</strong> {post.message}</div>
            <br/>
            <div style={{paddingLeft:'60px'}}>
            <a className="btn btn-info" style={{width:'50px',height:'40px' }}   href={`/EditUser/${post._id}`}>
                    <i className="fas fa-edit"></i>
                  </a>
              &nbsp;&nbsp;
              <button className="btn btn-danger" style={{ width: '50px', height: '40px' }} onClick={() => this.onDelete(post._id)}>
                <i className="fa fa-trash"></i>
              </button>
              &nbsp;&nbsp;
              <a className="btn btn-info" style={{width:'50px',height:'40px' }}   href={`/feedBack`}>
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                  </a>
            </div>
            
          </li>
        ))}
      </ul>

                </div>
                <br/>
                <div style={{padding:'10px'}}>
                <a href="/Profile"><img style={{height:'400px', width:'600px'}} src=".\regis.jpeg" href="#"></img></a>
               </div>
              </div>
            </div>
           
        </div>


      
         
      
      
      <br/><br/></div>  </div>
    )
  }
}
export default viewUser;
