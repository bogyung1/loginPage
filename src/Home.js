import React, {Component} from "react";
import fire from "./components/fire";


class Home extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    logout(){
        fire.auth().signOut().then(function (){
            console.log('Sign Out')
        });
    }
    render() {
        return (
            <div>

                <h1>You are logged in!!!</h1>
                <button onClick={this.logout}>LogOut</button>

            </div>
        )
    }

}
export default Home;