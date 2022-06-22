import { connect } from 'react-redux';
import React from 'react';
import '../../../styles/registration.less';

//{{url}}/api/v1/users/{{userID}}/lifecycle/reactivate?sendEmail=true would be the correct url whenever this gets hooked up btw

function ConfirmEmail(props) {
  return (
    <div className="reg-content-container email-confirmation">
      <div className="content">
        <p className="color-one">Let's make this official.</p>
        <p className="color-two">A confirmation email is headed your way.</p>
        <p className="color-three">
          Follow the link in the email to complete your registration!
        </p>
        <div className="link-container">
          <button>Resend Link</button>
          {/* update href after finding correct path from Okta */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user_id: state.userReducer.currentUser.user_id,
  };
};

export default connect(mapStateToProps)(ConfirmEmail);
