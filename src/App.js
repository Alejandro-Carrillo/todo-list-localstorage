import { useEffect, useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator/TaskCreator';
import TaskTable from './components/TaskTable/TaskTable';
import TopBar from './components/TopBar/TopBar';
import BtnClear from './components/BtnClear/BtnClear';
import TaskFott from './components/TaskFott/TaskFott';

function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showComplite, setShowComplite] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const deleteOne = (e) => {
    let newData = [];
    tasksItems
      .map((task) => {
        if (task.name != e) {
          newData.push(task)
        }
      });
    setTasksItems(newData);
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  const cleanTask = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowComplite(false);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems])



  return (
    <>
      <TopBar
        isChecked={showComplite}
        setShowComplite={(checked) => setShowComplite(checked)}
      />
      <main className="App">
        <TaskCreator createNewTask={createNewTask} />
        <div className='container-table'>
          <TaskTable
            title={'Tareas pendientes'}
            tasks={tasksItems}
            toggleTask={toggleTask} />
          {
            showComplite === true && (
              <>
                <TaskTable
                  title={'Tareas realizadas'}
                  tasks={tasksItems}
                  toggleTask={toggleTask}
                  showComplite={showComplite}
                  deleteOne={deleteOne} />
                <div className='btn-container'>
                  <BtnClear cleanTask={cleanTask} />
                </div>
              </>
            )
          }
        </div>
      </main>
      <TaskFott />
    </>
  );
}

export default App;
