import * as yup from 'yup';

const InstructorAddCourseFormSchema = yup.object().shape({
  course_type_id: yup
    .string()
    .oneOf(['Javascript', 'HTML', 'CSS'])
    .required('Please select a course'),
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
    .min(7, 'must be older than min')
    .lessThan(18, 'must be less that 18')
    .typeError('You must specify a maximum age')
    .required('You must specify a maximum age'),
  start_time: yup.string().required('Must input valid start time'),
  end_time: yup
    .string()
    .min(yup.ref('start_time'), 'end time must come after start time')
    .required('Must input valid end time'),
  start_date: yup
    .date()
    .min(new Date(), 'Please choose a future date')
    .required('You must specify a start date'),
  end_date: yup.date().required('Must input a valid end date'),
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
    .required('Please enter a zoom link!'),
});

export default InstructorAddCourseFormSchema;

// max_age input
// max_age VALUE > min_age VALUE
// if max_age is less than the min_age value,
// print 'Must be greater than ${min}'
