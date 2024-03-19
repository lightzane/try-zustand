import AddTodoForm from './add-todo-form';

export default () => {
  return (
    <div className='flex flex-col gap-y-5 animate-enter'>
      <h2 className='text-lg'>ASIDE</h2>
      <AddTodoForm />
    </div>
  );
};
