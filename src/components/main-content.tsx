import { useTabStore } from '../stores';
import DoneList from './done-list';
import Tabs from './tabs';
import TodoList from './todo-list';

export default () => {
  const { active } = useTabStore();

  return (
    <div className='flex flex-col gap-y-5 animate-enter'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg'>MAIN</h2>
        <Tabs />
      </div>
      <div className=''>
        {active === 'todo' ? (
          <div className='animate-enter'>
            <TodoList />
          </div>
        ) : (
          <div className='animate-enter'>
            <DoneList />
          </div>
        )}
      </div>
    </div>
  );
};
