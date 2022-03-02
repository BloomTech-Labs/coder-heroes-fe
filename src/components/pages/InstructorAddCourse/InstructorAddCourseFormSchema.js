import * as yup from 'yup';

const InstructorAddCourseFormSchema = yup.object().shape({
  course_type_id: yup.string().required('Please select a course'),
  day: yup
    .string()
    .oneOf([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ])
    .required('Please select a day'),
  size: yup
    .number()
    .typeError('You must specify a class size')
    .required('You must specify a class size')
    .integer('Number must be a whole value')
    .min(2, 'Class size must have at least 2 students'),
  min_age: yup
    .number()
    .lessThan(18, 'Must be 17 years or younger')
    .moreThan(6, 'Must be 7 years or older')
    .typeError('You must specify a minimum age')
    .required('You must specify a minimum age'),
  max_age: yup
    .number()
    .lessThan(18, 'Must be 17 years or younger')
    .moreThan(6, `Must be 7 years or older`)
    // .moreThan(min_age, `Must be older than ${min_age}`)
    .typeError('You must specify a maximum age')
    .required('You must specify a maximum age'),
  start_time: yup.string().required('Must input valid start time'),
  end_time: yup.string().required('Must input valid end time'),
  start_date: yup.date().required('You must specify a start date'),
  end_date: yup.date().required('You must specify an end date'),
  sessions: yup
    .number()
    .integer('Number must be a whole value')
    .min(1, 'Must have at least 1 session')
    .required('Set sessions'),
  location: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Please enter a zoom link!'
    )
    .required('Please enter a zoom link!'),
});

export default InstructorAddCourseFormSchema;

// max_age input
// max_age VALUE > min_age VALUE
// if max_age is less than the min_age value,
// print 'Must be greater than ${min}'
