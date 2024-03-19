import { useTodoStore } from '../stores';
import { cn } from '../utils';

export default () => {
  const {
    done,
    setTodo,
    // remove
  } = useTodoStore();

  function handleClick(id: string): void {
    setTodo(id);
    // remove(id);
  }

  return (
    <div className='animate-enter'>
      {!done.length ? (
        <div className='text-lg font-semibold'>👋 Nothing done...</div>
      ) : (
        <div className='flex flex-col gap-y-5'>
          <p>
            Click an item to move it back <b>todo</b>.
          </p>
          <ul className='animate-enter flex flex-col gap-y-3'>
            {done.map((item) => (
              <li
                key={item.id}
                className={cn(
                  'p-3 rounded-lg ring-2 ring-teal-500 cursor-pointer',
                  'transition ease-in-out duration-300',
                  'hover:bg-teal-500/10',
                )}
                onClick={() => {
                  handleClick(item.id);
                }}>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
