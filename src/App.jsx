
import './App.css'
import { Layout } from './components/Layout/Layout'
import { AppBar } from './components/AppBar/AppBar'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'

function App() {

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
