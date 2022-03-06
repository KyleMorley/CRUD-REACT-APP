import { useState, useEffect } from 'react'
import AddSubjects from './components/AddSubjects';
import Button from './components/Button';
import Subjects from './components/Subjects';
import Footer from './components/Footer';

function App() {
  // Json-Server used as mock REST API
  const [showAddSubjects, setShowAddSubjects] = useState(false);
  const [subjects, setSubjects] = useState([]);

  //GET Subjects
  useEffect(() => {
    const getSubjects = async () => {
      const subjectsAPI = await fetchSubjects();

      setSubjects(subjectsAPI)
    }

    getSubjects()
  }, [])

  const fetchSubjects = async () => {
    const res = await fetch('http://localhost:4000/subjects');
    const data = await res.json();
    return data
  } 

  // CREATE Subject 
  const addSubject = async (courseInfo) => {
    const res = await fetch('http://localhost:4000/subjects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(courseInfo)
    })

    const data = await res.json()
    setSubjects([...subjects, data])
    showAddSubjects(false)
  } 

  // UPDATE Subject 
  const updateCourseInfo = async (id, courseInfo) => {
    const res = await fetch(`http://localhost:4000/subjects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(courseInfo)
    })

    const data = await res.json()
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, courseName: data.courseName, courseCode: data.courseInfo, courseGrade: data.courseGrade }: subject
      )
    )
  }

  // DELETE Subject
  const deleteSubject = async (id) => {
    const res = await fetch(`http://localhost:4000/subjects/${id}`, {
      method: 'DELETE'
    })
    setSubjects(subjects.filter((subject) => subject.id !== id))
  }

  //Toggle Add Subjects Form
  const toggleForm = () => setShowAddSubjects(!showAddSubjects);

  return (
    <div className="content-wrapper">
    <h1>SUBJECTS PIN BOARD (CRUD)</h1>
    <Button text='Add Subject' onClick={toggleForm}/>
    {showAddSubjects ? <AddSubjects addSubject={addSubject}/> : null}
    {subjects.length > 0 ? <Subjects subjects={subjects} deleteSubject={deleteSubject} updateCourseInfo={updateCourseInfo}/> : <h1>No Subjects To Show</h1>}
    <Footer />
  </div>
  );
}

export default App;
