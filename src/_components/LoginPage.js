import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../_redux/authentification/actions';
import { connect } from 'react-redux';

class LoginPage extends React.Component 
{
	constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
	
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password));
        }
    }
    
	render() 
	{
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
	    return (
	        <div className="col-md-6 col-md-offset-3">
	            <h2>Login</h2>
	            <form name="form" onSubmit={this.handleSubmit}>
	                <div className="form-group">
	                    <label htmlFor="username">Username</label>
	                    <input type="text" className="form-control" name="username" value={email} onChange={this.handleChange}/>
	                </div>
	                <div className="form-group">
	                    <label htmlFor="password">Password</label>
	                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
	                </div>
	                <div className="form-group">
	                    <button className="btn btn-primary">Login</button>
	                    <Link to="/register" className="btn btn-link">Register</Link>
	                </div>
	            </form>
	        </div>
	    );
	}
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        //onLogin: (email, password) => { dispatch(login(email, password)); },
        //onSignUp: (email, password) => { dispatch(signup(email, password)); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);