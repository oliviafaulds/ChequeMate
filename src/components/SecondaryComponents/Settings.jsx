import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';

class Settings extends React.Component {


    render() {
        return (
            <div>
                <Link to="/PasswordReset"><button>
                    Reset Password
                </button>
                </Link>
            </div>
        )


    }
}
export default Settings