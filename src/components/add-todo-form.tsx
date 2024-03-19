import { z } from 'zod';
import { cn } from '../utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoStore } from '../stores';

const AddSchema = z.object({
  value: z.string().min(1, 'This field is required'),
});

type AddData = z.infer<typeof AddSchema>;

// const result = AddSchema.safeParse({ value: '' });

// if (!result.success) {
//   console.log(result.error.issues);
// }

export default () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AddData>({
    resolver: zodResolver(AddSchema),
    mode: 'onChange', // default is 'onSubmit'
  });

  const { addTodo } = useTodoStore();

  const handleTodoValue = (data: AddData) => {
    addTodo(data.value);
    reset();
  };

  return (
    <form
      className='w-full'
      onSubmit={handleSubmit(
        handleTodoValue /*, insert callback for invalid data as 2nd argument */,
      )}>
      <div className='group relative flex flex-col pt-2 rounded-t-md bg-teal-700/10'>
        {/* Label */}
        <label htmlFor='add' className='text-sm text-gray-600 px-4'>
          <span className='text-sm font-semibold'>Add todo</span>
        </label>

        {/* Input */}
        <input
          id='add'
          {...register('value')}
          className='px-4 pt-0 bg-transparent border-0 outline-none focus-within:ring-0 placeholder:text-gray-400'
          placeholder='Write your tasks here'
        />

        {/* Underline */}
        <div
          className={cn(
            'border-b-[3px] border-b-teal-500 w-0 mx-auto',
            'transition-all ease-in-out duration-300',
            'group-focus-within:w-full',
          )}></div>
      </div>

      <div className='px-4 text-sm text-rose-500'>
        <span className='animate-enter'>{errors.value?.message}</span>
      </div>

      <button
        type='submit'
        disabled={!isValid}
        className={cn(
          'mt-5 w-full rounded-lg py-2 px-4 text-sm font-semibold bg-teal-500 text-gray-200',
          'transition ease-in-out duration-300',
          'focus:ring-2 ring-teal-500 focus:ring-offset-2 ring-offset-slate-200',
          'disabled:ring-teal-900 disabled:opacity-50 disabled:pointer-events-none',
        )}>
        Submit todo
      </button>
    </form>
  );
};
