import React from 'react';

export default function ParentAccountInfo({ parentInfo, setParentInfo }) {
  const onChange = e => {
    setParentInfo({
      ...parentInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="parent-account-info">
      <div className="form-line">
        <input
          name="name"
          type="text"
          placeholder="*Name"
          value={parentInfo.name}
          onChange={onChange}
        />

        <input
          name="email"
          type="email"
          placeholder="*Email"
          value={parentInfo.email}
          onChange={onChange}
        />
      </div>

      <div className="form-line">
        <input
          name="location"
          type="text"
          placeholder="*City,State"
          value={parentInfo.location}
          onChange={onChange}
        />

        <input
          name="phone"
          type="tel"
          placeholder="*Phone Number"
          value={parentInfo.phone}
          onChange={onChange}
        />
      </div>

      <div className="long-form-line">
        <textarea
          name="notes"
          type="text"
          placeholder="Notes (Use this space to provide any additional context like alternative contact, day-to-day availability, etc...)"
          value={parentInfo.notes}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
