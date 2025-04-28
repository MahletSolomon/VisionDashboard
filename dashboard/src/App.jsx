
import './App.css'
import OverviewCard from './components/overviewCard.jsx'
import ClassRoomCard from './components/classroomCard.jsx'
import TeacherCard from './components/teacherCard.jsx'
import StudentCard from './components/studentCard.jsx'
import ClassDropDown from './components/classDropDown.jsx'
import Dashboard from './pages/dashboard.jsx'
import Layout from './pages/layout.jsx'
function App() {
  return(
    <Layout>
      <Dashboard/>
    </Layout>
  )
  
}

export default App
