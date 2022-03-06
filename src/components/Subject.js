
const Subject = ({subject, deleteSubject, updateSubject}) => {

  return (
    <ul className="list">
      <li className="list-item">{subject.courseName}</li>
      <li className="list-item">{subject.courseCode}</li>
      <li className="list-item grade">{subject.courseGrade}</li>
      <span className="edit" onClick={() => updateSubject(subject.id)}>Edit</span>
      <span className="delete" onClick={() => deleteSubject(subject.id)}>X</span>
    </ul>
  )
}

export default Subject