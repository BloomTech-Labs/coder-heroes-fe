import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import AdminInstructorCard from './AdminInstructorCard';
import LoadingComponent from '../../common/LoadingComponent';
import PaginatePage from '../../common/PaginatePage';

const { Content } = Layout;

function AdminInstructors(props) {
  const { instructors } = props;
  const filtered = instructors.filter(
    instructor => instructor.status === 'false'
  );
  const [pending, setPending] = useState(true);
  const [displayed, setDisplayed] = useState(filtered);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const dispatch = useDispatch();
  const idToken = useOktaAuth().oktaAuth.getIdToken();

  useEffect(() => {
    dispatch(getInstructors(idToken));
  }, [dispatch, idToken]);

  useEffect(() => {
    setDisplayed(filtered);
  }, [instructors]);

  const ToggleInstructors = () => {
    if (pending) {
      setDisplayed(instructors);
      setPending(false);
    }
    if (!pending) {
      setDisplayed(filtered);
      setPending(true);
    }
  };

  const handleChange = (minValue, maxValue) => {
    setMinValue(minValue);
    setMaxValue(maxValue);
  };

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div className="instruct-header-container">
          <div className="tgl-container">
            <button className="tgl-button" onClick={ToggleInstructors}>
              {!pending ? 'View Pending Applications' : 'View All Instructors'}
            </button>
          </div>
          <div className="instructor-card-container">
            {displayed.length > 0 ? (
              displayed.slice(minValue, maxValue).map(instructor => (
                <AdminInstructorCard
                  key={instructor.instructor_id}
                  name={
                    instructor.name
                    /**TODO: currently no instructor name on the backend,
                     * this will probably need to change to instructor.instructor_name when that is added*/
                  }
                  bio={instructor.bio}
                  status={instructor.status}
                />
              ))
            ) : (
              <LoadingComponent message={'Finding Instructors...'} />
            )}
          </div>
          <PaginatePage
            numPerPage={10}
            minValue={minValue}
            maxValue={maxValue}
            onChange={handleChange}
            data={displayed}
          />
        </div>
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    instructors: state.instructorReducer.instructors,
  };
};

export default connect(mapStateToProps, {})(AdminInstructors);
