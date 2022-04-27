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

const initialSaveDisabled = true;

const InstrRegForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialSaveDisabled);

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
  };

  const formSave = () => {
    // TODO
  };

  const onSubmit = evt => {
    evt.preventDefault();
    formSave();
    setFormValues(initialValues);
  };

  const onChange = evt => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  useEffect(() => {
    InstructorFormSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={1} />

      <div className="reg-form-title">
        <h1 className="form-title">Instructor Account Info</h1>
        <p>*indicates required field</p>
      </div>

      <div className="reg-form-container">
        <form onSubmit={onSubmit}>
          <div className="form-line">
            <label>
              <input
                name="name"
                type="text"
                placeholder="*Name"
                value={formValues.name}
                onChange={onChange}
              />
            </label>

            <label>
              <input
                name="email"
                type="email"
                placeholder="*Email"
                value={formValues.email}
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-line">
            <label>
              <input
                name="location"
                type="text"
                placeholder="*City,State"
                value={formValues.location}
                onChange={onChange}
              />
            </label>

            <label>
              <input
                name="phone"
                type="tel"
                placeholder="*Phone Number"
                value={formValues.phone}
                onChange={onChange}
              />
            </label>
          </div>

          <div className="long-form-line">
            <label>
              <textarea
                name="education"
                type="text"
                placeholder="*Education (include degree and University)"
                value={formValues.education}
                onChange={onChange}
              />
            </label>

            <label>
              <textarea
                name="tech"
                type="text"
                placeholder="*Technical Experience"
                value={formValues.tech}
                onChange={onChange}
              />
            </label>

            <label>
              <textarea
                name="notes"
                type="text"
                placeholder="Notes (Use this space to provide any additional context or relevant experience)"
                value={formValues.notes}
                onChange={onChange}
              />
            </label>
          </div>

          <div className="content reg-btn-container">
            <button disabled={disabled}>Submit</button>
          </div>

          <div className="errors">
            <div>{formErrors.name}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.location}</div>
            <div>{formErrors.phone}</div>
            <div>{formErrors.education}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstrRegForm;
