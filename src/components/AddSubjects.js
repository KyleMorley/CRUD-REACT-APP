import Button from "./Button";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const AddSubjects = ({ addSubject }) => {
  const [courseName, setCourseName] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [courseGrade, setCourseGrade] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  

  const submitCourse = (e) => {
    e.preventDefault();

    if(!courseName || !courseCode || !courseGrade) {
      setErrorMessage(true)
    } else {
      addSubject({courseName, courseCode, courseGrade})

      setCourseName('')
      setCourseCode('')
      setCourseGrade('')
      setErrorMessage(false)
    }
  }

  return (
    <form className="form" onSubmit={submitCourse}>
      {errorMessage ? <ErrorMessage /> : null}
      <h1>Add Subject</h1>
        <div className="form-control">
            <label>Subject</label>
            <input className="input" value={courseName} type="text" placeholder="Subject Name" onChange={ e => setCourseName(e.target.value) }/>
        </div>
        <div className="form-control">
            <label>Course Code</label>
            <input className="input" value={courseCode} type="text" placeholder="Course Code" onChange={ e => setCourseCode(e.target.value) }/>
        </div>
        <div className="form-control">
            <label>Grade</label>
            <input className="input" value={courseGrade} type="text" placeholder="Grade" onChange={ e => setCourseGrade(e.target.value) }/>
        </div>
        <div className="form-control">
          <Button type='submit' text='Add' styles={{ width: '100%' }}/>
        </div>
    </form>
  )
}

export default AddSubjects