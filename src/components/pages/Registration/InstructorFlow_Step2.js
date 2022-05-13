import React, { useState, useEffect } from 'react';
import '../../../styles/registration.less';
import InstructorFormSchema from './InstructorFormSchema';
import * as yup from 'yup';
import RegistrationProgress from './RegistrationProgress';

const initialValues = {
  name: '',
  email: '',
  location: '',
  phone: '',
  education: '',
  tech: '',
  notes: '',
};

const initialErrors = {
  name: '',
  email: '',
  location: '',
  phone: '',
  education: '',
};

const initialWarning = {
  warning: 'Please enter all required fields',
};

const initialSaveDisabled = true;

const InstrRegForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialSaveDisabled);
  const [formWarning, setFormWarning] = useState(initialWarning);

  const validate = (name, value) => {
    yup
      .reach(InstructorFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log(formValues);
  };

  const formSave = () => {
    // TODO
  };

  const onSubmit = evt => {
    evt.preventDefault();
    formSave();
  };

  const onChange = evt => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  useEffect(() => {
    InstructorFormSchema.validate(formValues)
      .then(() => setFormWarning({}))
      .catch(error => {
        if (error instanceof yup.ValidationError) {
          setFormWarning(initialWarning);
        }
      });
  }, [formValues]);

  useEffect(() => {
    InstructorFormSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={1} />

      <div className="reg-form-title">
        <h1 className="form-title">Instructor Account Info</h1>
        <p className="indicator">*indicates required field</p>
      </div>

      <div className="reg-form-container">
        <form onSubmit={onSubmit}>
          <div className="form-line">
            <label>
              <h3 className="labelName">Name:</h3>
              <input
                name="name"
                type="text"
                placeholder="*Name"
                value={formValues.name}
                onChange={onChange}
              />
              <span className="error">{formErrors.name}</span>
            </label>

            <label>
              <h3 className="labelName">Email:</h3>
              <input
                name="email"
                type="email"
                placeholder="*Email"
                value={formValues.email}
                onChange={onChange}
              />
              <span className="error">{formErrors.email}</span>
            </label>
          </div>

          <div className="form-line">
            <label>
              <h3 className="labelName">Location:</h3>
              <input
                name="location"
                type="text"
                placeholder="*City, State"
                value={formValues.location}
                onChange={onChange}
              />
              <span className="error">{formErrors.location}</span>
            </label>

            <label>
              <h3 className="labelName">Phone Number:</h3>
              <input
                name="phone"
                type="tel"
                placeholder="*Phone Number"
                value={formValues.phone}
                onChange={onChange}
              />
              <span className="error">{formErrors.phone}</span>
            </label>
          </div>

          <div className="long-form-line">
            <label>
              <h3 className="labelName">Education:</h3>
              <textarea
                name="education"
                type="text"
                placeholder="*Education (include degree and university)"
                value={formValues.education}
                onChange={onChange}
              />
              <span className="error">{formErrors.education}</span>
            </label>

            <label>
              <h3 className="labelName">Technical Experience:</h3>
              <textarea
                name="tech"
                type="text"
                placeholder="*Technical Experience"
                value={formValues.tech}
                onChange={onChange}
              />
              <span className="error">{formErrors.tech}</span>
            </label>

            <label>
              <h3 className="labelName">Notes:</h3>
              <textarea
                name="notes"
                type="text"
                placeholder="Notes (Use this space to provide any additional context or relevant experience)"
                value={formValues.notes}
                onChange={onChange}
              />
              <span className="error"></span>
            </label>
          </div>
          <div className="content reg-btn-container">
            <span className="warning">{formWarning.warning}</span>
            <button disabled={disabled}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstrRegForm;
