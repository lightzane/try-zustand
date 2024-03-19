import { useTabStore } from '../stores';
import { cn } from '../utils';

export default () => {
  const { active, setActive } = useTabStore();

  return (
    <div className='flex items-center gap-x-5 text-sm font-semibold'>
      <button
        type='button'
        className={cn(
          'rounded-lg p-2 text-white w-20 outline-none',
          'transition ease-in-out duration-300',
          'focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus: ring-offset-slate-200',
          {
            'bg-teal-500': active === 'todo',
            'text-gray-700': active !== 'todo',
          },
        )}
        onClick={() => setActive('todo')}>
        <span>TODO</span>
      </button>
      <button
        type='button'
        className={cn(
          'rounded-lg p-2 text-white w-20 outline-none',
          'transition ease-in-out duration-300',
          'focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus: ring-offset-slate-200',
          {
            'bg-teal-500': active === 'done',
            'text-gray-700': active !== 'done',
          },
        )}
        onClick={() => setActive('done')}>
        <span>DONE</span>
      </button>
    </div>
  );
};
