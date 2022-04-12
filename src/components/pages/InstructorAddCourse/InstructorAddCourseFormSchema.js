import * as yup from 'yup';

const InstructorAddCourseFormSchema = yup.object().shape({
  size: yup
    .number()
    .min(2, 'Class size must have at least 2 students')
    .integer('Number must be a whole value')
    .typeError('You must specify a class size')
    .required('You must specify a class size'),
  min_age: yup
    .number()
    .moreThan(6, 'must be at least 7')
    .lessThan(18, 'must be less than 18')
    .typeError('You must specify a minimum age')
    .required('You must specify a minimum age'),
  max_age: yup
    .number()
    .min(7, 'must be older than 7')
    .lessThan(18, 'must be less that 18')
    .typeError('You must specify a maximum age')
    .required('You must specify a maximum age'),
  start_time: yup
    .string()
    .typeError('You must select a time')
    .required('Must input valid start time'),
  end_time: yup
    .string()
    .typeError('You must select a time')
    .required('Must input valid end time'),
  start_date: yup
    .date()
    .min(new Date(), 'Please choose a future date')
    .typeError('You must specify a valid start date')
    .required('You must specify a valid start date'),
  end_date: yup
    .date()
    .typeError('You must specify a valid end date')
    .required('You must specify a valid end date'),
  sessions: yup
    .number()
    .integer('Number must be a whole value')
    .min(1, 'Must have at least 1 session')
    .typeError('Must set sessions')
    .required('Set sessions'),
  location: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Please enter a zoom link!'
    )
    .typeError('Must be a valid zoom link')
    .required('Please enter a zoom link!'),
  day: yup
    .string()
    .typeError('Must select a Day')
    .oneOf(
      [
        'Monday',
        'Tuesday',
        'Wednasday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'Please select a day'
    ),
  course_type: yup
    .string()
    .typeError('Must select a course')
    .oneOf(
      ['CoderYoga', 'CoderCamp', 'CoderSitters'],
      'Please select a Course'
    ),
  course_name: yup
    .string()
    .min(5, 'Too Short! Has to be More than 5 words')
    .max(50, 'Too Long! Has to be less than 50 words')
    .required('Course Name is Required')
    .typeError('Course Name is required'),
});

export default InstructorAddCourseFormSchema;

// max_age input
// max_age VALUE > min_age VALUE
// if max_age is less than the min_age value,
// print 'Must be greater than ${min}'
