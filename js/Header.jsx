import React from 'react';

class Header extends React.Component{
    state = {
        seconds: 1,
    }
    componentDidMount() {
        this.welcomeInterval = setInterval(() =>{
            this.setState({
                seconds : this.state.seconds + 1,
            });
            if(this.state.seconds === this.props.welcomeText.length){
                clearInterval(this.welcomeInterval);
            }
        }, 30);
    }
    componentWillUnmount(){
        clearInterval(this.welcomeInterval);
    }
    render(){
        const updateText = this.props.welcomeText.substr(0, this.state.seconds);
        return <h1>{updateText}</h1>;
    }
}

export default Header;
