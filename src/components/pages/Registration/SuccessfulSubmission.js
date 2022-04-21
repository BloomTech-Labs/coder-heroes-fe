import React from 'react';
import '../../../styles/registration.less';

export default function SuccessfulSubmission() {
  return (
    <div className="reg-content-container email-confirmation">
      <div className="content">
        <p className="color-one">
          Your CoderHeroes Educator Application has been successfully submitted.
        </p>
        <div className="sub-content">
          <p className="color-one">
            We look forward to contacting you in 2-3 business days. Thank you!
          </p>
        </div>
        <div className="link-container">
          {/* eslint-disable-next-line*/}
          <a href="#">LEARN MORE</a>
          {/* update href after finding correct path from Okta */}
        </div>
      </div>
    </div>
  );
}
