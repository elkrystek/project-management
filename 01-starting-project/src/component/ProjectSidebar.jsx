import Button from "./Button";
import NewProject from "./NewProject";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedprojectId
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-white md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssclasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 "

          if (project.id === selectedprojectId)
          {
            cssclasses += ' bg-stone-500 text-stone-200'
          }
          else{
            cssclasses += ' text-stone-400'
          }

          return (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className={cssclasses}
            >
              {project.title}
            </button>
          </li>
          );
        })}
      </ul>
    </aside>
  );
}
