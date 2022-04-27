import React from 'react';

export default function() {
  return (
    <div className="parent-account-info">
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
    </div>
  );
}
