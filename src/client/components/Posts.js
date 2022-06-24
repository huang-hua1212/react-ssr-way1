import React, {Component} from "react";

export default class Posts extends Component {
    componentDidMount(){
        this.fetchPosts();
    }
    fetchPosts= async ()=>{
        const response = await fetch("https://all-the-cors.herokuapp.com/https://blooming-sands-85089.herokuapp.com/react-shopping-cart/cart'");
        const data = response.json();
        console.log(data);
    }
    render() {
        return(
            <div>
            <div>Welcome Posts!!!</div>
            <button>FetchData</button>
            </div>
        );
    }
}