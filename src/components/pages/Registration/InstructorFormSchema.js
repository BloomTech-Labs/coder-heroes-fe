import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const InstructorFormSchema = yup.object().shape({
  name: yup.string().required('You must enter your name'),
  email: yup.string().required('You must enter your email'),
  location: yup.string().required('You must enter your location'),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  education: yup.string().required('You must enter your education'),
  tech: yup.string(),
  notes: yup.string(),
});

export default InstructorFormSchema;
