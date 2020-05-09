import React from 'react';
import {connect} from 'react-redux';
import {fectchngPosts} from '../REDUX/Action';
class Container extends React.Component{
   
    componentDidMount=()=>{
        this.props.fectchngPosts();
    }

    render(){

    const allPost=this.props.posts.map(post=><li key={post.id}>{post.title}</li>)
    
        return this.props.loading?<div> Loading...</div>:(
            <div>
                <h3>Asynchrounous Data using Redux Thunk Middleware </h3>
              <ul> {allPost}</ul>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        
        fectchngPosts:()=>{dispatch(fectchngPosts())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Container);