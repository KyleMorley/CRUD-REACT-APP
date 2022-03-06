import Subject from './Subject';
import UpdateSubject from "./UpdateSubject"
import { useState } from 'react'

const Subjects = ({ subjects, deleteSubject, updateCourseInfo }) => {
  const [update, setUpdate] = useState(false)
  const [courseId, setCourseId] = useState('')

  const updateSubject = (id) => {
    setUpdate(!update)
    setCourseId(id)
  } 

  return (
    <div className='list-parent'>
        <h1>Your Subjects List</h1>
        {update ? <UpdateSubject courseId={courseId} updateCourseInfo={updateCourseInfo}/> : null}
        {subjects.map((subject) => (<Subject key={subject.id} subject={subject} deleteSubject={deleteSubject} updateSubject={updateSubject}/>))}
    </div>
  )
}

export default Subjects