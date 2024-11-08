import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
    const tasks = useSelector((state) => state.tasks.items)

    const count = tasks.reduce(
        (acc, task) => {
          if (task.completed) {
            acc.completed += 1;
          } else {
            acc.active += 1;
          }
          return acc;
        },
        { active: 0, completed: 0 }
      );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
