import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectSidebar from "./component/ProjectSidebar";
import {useState} from 'react';
import SelectedProject from "./component/SelectedProject";

function App() {
  const [projectsState, setprojectsState] = useState({
    selectedprojectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTaks(text) {
    setprojectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedprojectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
        
      };
    });

  }
  function handleDeleteTask(id) {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });

  }
  function handleStartAddproject() {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: null,
      };
    });
  }

  function handleCancel() {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
      };
    });
  }
  function handleDelete() {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedprojectId
        ),
      };
    });
  }
  function handleAddProject(projectData) {
    setprojectsState((prevState) => {
      const neProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedprojectId: undefined,
        projects: [...prevState.projects, neProject],
      };
    });
  }

  function handleSelectProject(id) {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: id,
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedprojectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTaks}
      onDeleteTask={handleDeleteTask}
      tasks = {projectsState.tasks}
    />
  );

  if (projectsState.selectedprojectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedprojectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddproject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddproject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;

