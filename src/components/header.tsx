import { useTodoStore } from '../stores';
import Logo from './logo';

export default () => {
  const { todo, done } = useTodoStore();

  return (
    <header className='py-5 border-b-2 border-b-teal-500'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-center gap-x-5'>
            <div className='text-teal-500 animate-spin-slow'>
              <Logo />
            </div>
            <span>Try Zustand</span>
          </div>

          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>
              TODO
              <span className='text-base font-semibold px-4'>
                {todo.length}
              </span>
            </span>
            <span className='text-sm'>
              DONE
              <span className='text-base font-semibold px-4'>
                {done.length}
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
