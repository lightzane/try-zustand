import AsideContent from './components/aside-content';
import Header from './components/header';
import MainContent from './components/main-content';

export default () => {
  return (
    <div className='flex flex-col gap-y-5 h-[100vh] overflow-y-auto'>
      <div className='sticky top-0 z-10 bg-slate-200'>
        <Header />
      </div>

      {/* Content */}
      <div className='w-full mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8 pt-5 md:pt-16'>
        {/* 
            Parent style:
              display: flex
              flex-direction: row // ! DO NOT implement on small devices
        */}
        <div className='flex flex-col md:flex-row ... gap-5 pb-32'>
          {/* 
              Aside style:
                position: sticky
                top: ?? // * adjust accordingly
                align-self: flex-start // ! important for "sticky" to work
          */}
          <aside className='sticky top-24 self-start ... w-full md:max-w-xs p-5 ring-2 ring-teal-500 rounded-lg bg-slate-200'>
            <AsideContent />
          </aside>
          {/* 
              Content style: any
          */}
          <main className='flex-1 p-5 ring-2 ring-teal-500 rounded-lg h-[5000px]'>
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
};
