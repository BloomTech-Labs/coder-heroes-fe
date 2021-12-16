## parent database

### PARENT CALENDAR

- As a parent, he/she can see available sessions in calendar
`METHOD GET [base_URL/api/sessions]`
- As a parent, he/she can book a session for the child
`METHOD POST [base_URL/api/parents/:parent_id/bookings], newBooking`

```
    {
        "session_id": 1,
        "course_id": 1,
        "instructor_id": 1,
        "instructor_name": "Test003",
        "instructor_rating": 2,
        "size": 15,
        "subject": "CS101",
        "description": "Computer Science fundamentals",
        "prereqs": null,
        "start_date": "2022-10-10T07:00:00.000Z",
        "end_date": "2022-10-10T07:00:00.000Z",
        "start_time": "17:00:00",
        "end_time": "18:00:00",
        "location": "https://zoom.us/my/john123"
    },
    {
        "session_id": 2,
        "course_id": 3,
        "instructor_id": 2,
        "instructor_name": "Test006",
        "instructor_rating": 4,
        "size": 16,
        "subject": "JavaScriptB",
        "description": "Intermediate JavaScript.",
        "prereqs": [
            "JavaScriptA"
        ],
        "start_date": "2022-10-11T07:00:00.000Z",
        "end_date": "2022-10-11T07:00:00.000Z",
        "start_time": "15:00:00",
        "end_time": "16:00:00",
        "location": "https://zoom.us/my/john321"
    }
```

### PARENT BOOKING
- As a logged in parent, he/she can see children's bookings
`METHOD GET [base_URL/api/parents/:parent_id/bookings]`

```
[
    {
        child_id: 12,
        child_name: 'Joe',
        "session_id": 1,
        "course_id": 1,
        "instructor_id": 1,
        "instructor_name": "Test003",
        "instructor_rating": 2,
        "size": 15,
        "subject": "CS101",
        "description": "Computer Science fundamentals",
        "prereqs": null,
        "start_date": "2021-12-09T07:00:00.000Z",
        "end_date": "2022-10-10T07:00:00.000Z",
        "start_time": "17:00:00",
        "end_time": "18:00:00",
        "location": "https://zoom.us/my/john123"
    },
    {
        child_id: 12,
        child_name: 'Joe',
        "session_id": 2,
        "course_id": 3,
        "instructor_id": 2,
        "instructor_name": "Test006",
        "instructor_rating": 4,
        "size": 16,
        "subject": "JavaScriptB",
        "description": "Intermediate JavaScript.",
        "prereqs": [
            "JavaScriptA"
        ],
        "start_date": "2022-10-11T07:00:00.000Z",
        "end_date": "2022-10-11T07:00:00.000Z",
        "start_time": "15:00:00",
        "end_time": "16:00:00",
        "location": "https://zoom.us/my/john321"
    },
    {
        child_id: 13,
        child_name: 'Mark',
        "session_id": 1,
        "course_id": 1,
        "instructor_id": 1,
        "instructor_name": "Test003",
        "instructor_rating": 2,
        "size": 15,
        "subject": "CS101",
        "description": "Computer Science fundamentals",
        "prereqs": null,
        "start_date": "2022-10-10T07:00:00.000Z",
        "end_date": "2022-10-10T07:00:00.000Z",
        "start_time": "17:00:00",
        "end_time": "18:00:00",
        "location": "https://zoom.us/my/john123"
    },
    {
        child_id: 13,
        child_name: 'Mark',
        "session_id": 2,
        "course_id": 3,
        "instructor_id": 2,
        "instructor_name": "Test006",
        "instructor_rating": 4,
        "size": 16,
        "subject": "JavaScriptB",
        "description": "Intermediate JavaScript.",
        "prereqs": [
            "JavaScriptA"
        ],
        "start_date": "2022-10-11T07:00:00.000Z",
        "end_date": "2022-10-11T07:00:00.000Z",
        "start_time": "15:00:00",
        "end_time": "16:00:00",
        "location": "https://zoom.us/my/john321"
    },
]
```



