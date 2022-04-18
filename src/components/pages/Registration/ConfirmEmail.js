import React from 'react';
import '../../../styles/registration.less';

export default function ConfirmEmail() {
  return (
    <div className="content-container email-confirmation">
      <div className="content">
        <p className="color-one">Let's make this official.</p>
        <p className="color-two">A confirmation email is headed your way.</p>
        <p className="color-three">
          Follow the link in the email to complete your registration!
        </p>
        <div className="link-container">
          <a href="#">Resend Link</a>
          {/* update href after finding correct path from Okta */}
        </div>
      </div>
    </div>
  );
}
