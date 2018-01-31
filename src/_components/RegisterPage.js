import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../_redux/authentification/actions';
import { connect } from 'react-redux';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.email && user.password) {
            //dispatch(signup(user));
        }
    }
    
    render() 
    {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                    	<button className="btn btn-primary">Register</button>
                    	<Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        //isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        //signup: (email, password) => { dispatch(signup(email, password)); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);