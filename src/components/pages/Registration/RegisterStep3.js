import React from 'react';
import RegistrationProgress from './RegistrationProgress';
import '../../../styles/registration.less';
import avi1 from '../../../img/Avatars/Avatar01.svg';
import avi2 from '../../../img/Avatars/Avatar03.svg';
import avi3 from '../../../img/Avatars/Avatar15.svg';
import avi4 from '../../../img/Avatars/Avatar10.svg';
import avi5 from '../../../img/Avatars/Avatar06.svg';
import avi6 from '../../../img/Avatars/Avatar07.svg';
import avi7 from '../../../img/Avatars/Avatar16.svg';

export default function() {
  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={2} />

      <div className="reg-form-container">
        <div className="parent-account-container">
          <div className="reg-form-title">
            <h1 className="form-title">Parent Account Info</h1>
            <p>* indicates required field</p>
          </div>

          <form>
            <div className="form-line">
              <label>
                <input
                  name="name"
                  type="text"
                  placeholder="*Name"
                  // value={formValues.name}
                  // onChange={onChange}
                />
              </label>

              <label>
                <input
                  name="email"
                  type="email"
                  placeholder="*Email"
                  // value={formValues.email}
                  // onChange={onChange}
                />
              </label>
            </div>

            <div className="form-line">
              <label>
                <input
                  name="location"
                  type="text"
                  placeholder="*City,State"
                  // value={formValues.location}
                  // onChange={onChange}
                />
              </label>

              <label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="*Phone Number"
                  // value={formValues.phone}
                  // onChange={onChange}
                />
              </label>
            </div>

            <div className="long-form-line">
              <label>
                <textarea
                  name="notes"
                  type="text"
                  placeholder="Notes (Use this space to provide any additional context like alternative contact, student disability, etc...)"
                  // value={formValues.notes}
                  // onChange={onChange}
                />
              </label>
            </div>

            <div className="profile-container">
              <h1 className="form-title">Student Profiles</h1>

              <div className="student-form-container">
                {/* create student form component */}
                <div className="student-form">
                  <label>
                    <input
                      name="name"
                      type="text"
                      placeholder="*Student Name"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="pronoun"
                      type="text"
                      placeholder="*Pronoun"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="age"
                      type="text"
                      placeholder="*Age"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="grade"
                      type="text"
                      placeholder="*Grade"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="student-email"
                      type="text"
                      placeholder="*Student Email"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <div className="avatars">
                    <img src={avi1} />
                    <img src={avi2} />
                    <img src={avi3} />
                    <img src={avi7} />
                    <img src={avi5} />
                    <img src={avi6} />
                    <img src={avi4} />
                    <button>+</button>
                  </div>

                  <p>select or upload an avatar</p>
                </div>

                <div className="student-form">
                  <label>
                    <input
                      name="name"
                      type="text"
                      placeholder="*Student Name"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="pronoun"
                      type="text"
                      placeholder="*Pronoun"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="age"
                      type="text"
                      placeholder="*Age"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="grade"
                      type="text"
                      placeholder="*Grade"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="student-email"
                      type="text"
                      placeholder="*Student Email"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <div className="avatars">
                    <img src={avi1} />
                    <img src={avi2} />
                    <img src={avi3} />
                    <img src={avi7} />
                    <img src={avi5} />
                    <img src={avi6} />
                    <img src={avi4} />
                    <button>+</button>
                  </div>

                  <p>select or upload an avatar</p>
                </div>

                <div className="student-form">
                  <label>
                    <input
                      name="name"
                      type="text"
                      placeholder="*Student Name"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="pronoun"
                      type="text"
                      placeholder="*Pronoun"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="age"
                      type="text"
                      placeholder="*Age"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="grade"
                      type="text"
                      placeholder="*Grade"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <label>
                    <input
                      name="student-email"
                      type="text"
                      placeholder="*Student Email"
                      // value={formValues.name}
                      // onChange={onChange}
                    />
                  </label>

                  <div className="avatars">
                    <img src={avi1} />
                    <img src={avi2} />
                    <img src={avi3} />
                    <img src={avi7} />
                    <img src={avi5} />
                    <img src={avi6} />
                    <img src={avi4} />
                    <button>+</button>
                  </div>

                  <p>select or upload an avatar</p>
                </div>
              </div>

              <div className="content">
                <a href="/register-2">back</a>
                <button>submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
