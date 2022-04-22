import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../redux/actions/userActions';
import { DownOutlined } from '@ant-design/icons';
import Button from '../../common/Button';
import background from '../../../img/cloud-bg.jpg';
import logo from '../../../img/coderheroes-logo.svg';
import ocloud from '../../../img/bg-orange-cloud.svg';
import students from '../../../img/class-imge-left.jpg';
import gcloud from '../../../img/bg-green-cloud.svg';
import profile from '../../../img/profile-img-brianne-caplan.png';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

function RenderLandingPage(props) {
  const { authState, authService } = useOktaAuth();
  const dispatch = useDispatch();
  const { idToken } = authState;
  const history = useHistory();

  // function browseProgramsButton(){
  //   history.push('/programs)';
  // };

  useEffect(() => {
    if (idToken) {
      dispatch(getCurrentUser(idToken, authState, authService));
    }
    // eslint-disable-next-line
  }, [dispatch, idToken]);

  return (
    <div className="landing-container">
      {/* Main text container */}
      <div className="landing-main-container">
        <div
          className="cloudbg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <img src={logo} alt="CoderHeroes Text in Turquoise" />
          <div className="landing-main-text">
            <h1>Coding is a superpower.</h1>
            <h3>
              {' '}
              Through a love of teaching and technology, we empower youth to
              change the world <br /> with their ideas.{' '}
            </h3>
          </div>

          {/* Button container */}
          <div className="landing-button-container">
            <Button
              classType="browse-btn btn"
              buttonText="BROWSE PROGRAMS"
              onClick={() => {
                history.push('/browse-programs');
              }}
            ></Button>
            <Button
              classType="sign-up-btn btn"
              buttonText="SIGN UP"
              // onClick={() => { history.push('/registry');}}
            ></Button>
          </div>
          <DownOutlined />
          <div className="secondtext">
            <h3>
              {' '}
              We choose to navigate to Covid-19 landscape with innovation, and
              launched the first-ever coding program for kids with a{' '}
            </h3>
          </div>
          <h1 className="bogotext">BUY-ONE-GIVE-ONE CHARITABLE MODEL.</h1>
        </div>
      </div>

      {/* Second text container */}
      <div className="landing-second-container">
        <img
          className="landing-second-container-orange"
          src={ocloud}
          alt="Orange Cloud"
        />
        <img
          className="class"
          src={students}
          alt="class full of smiling students"
        />
        <div className="landing-second-container-content">
          <div className="landing-second-container-text">
            <h3>GIVE BACK TO THE COMMUNITY.</h3>
            <h1>
              Support Code Your
              <nobr /> Dreams
            </h1>
            <p>
              All CoderHeroes proceeds provide direct funding to our original
              mission, centered in incubating tech skills within under served
              school districts.
            </p>
          </div>
          <Button
            classType="landing-second-container-btn"
            buttonText="VISIT WEBSITE"
          ></Button>
        </div>
      </div>
      {/* Third text container */}
      <div className="landing-third-container">
        <img
          className="landing-third-container-green"
          src={gcloud}
          alt="Green Cloud"
        />
        <div className="landing-third-container-text">
          <div className="description">
            <p>
              <em>
                “I have 7+ years of experience working in technology. I bring
                <br /> excitement and positivity to every class, virtual and
                in-person.
                <br />
                <br />
                I have experience teaching the following subjects for K-12
                <br /> students: Python, Swift, JavaScript, App Inventor, Design{' '}
                <br /> Thinking, UI/UX Design, Sales & Marketing”
              </em>
            </p>
          </div>
          <div className="brianne">
            <h1>BRIANNE CAPLAN</h1>
            <p>FOUNDER & CEO, CODERHEROES & CODE YOUR DREAMS</p>
          </div>
        </div>

        <img
          className="landing-third-container-pic"
          src={profile}
          alt="Brianne Smiling"
        />
      </div>
    </div>
  );
}
export default RenderLandingPage;
