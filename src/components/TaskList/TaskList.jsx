import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.items);
    const statusFilter = useSelector((state) => state.filters.status);

    const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
