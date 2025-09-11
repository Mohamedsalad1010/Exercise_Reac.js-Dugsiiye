import React from 'react'

const StudentDashboard = () => {

  const stats = [
    {id: 1 ,label: 'average Grade' , value: '90%',   icon: '📊' },
    {id: 2 ,label: 'Courses' , value: '3',   icon: '📚' },
    { id: 3 ,label: 'Study Hours' , value: '45h',   icon: '⏰' },
    { id: 4 ,label: 'Assignments' , value: '14',   icon: '✍️' },

  ]

  const courses = [
    {id: 1 , name: 'React Fundamentals', progress: 75, instructor: 'mc hamuuda' , nextLesson: 'Components & Props'},
    {id: 2 , name: 'UI/UX Design', progress: 95, instructor: 'khalid musa' , nextLesson: 'Color Theory'},
    {id: 3 , name: 'JavaScript Advanced', progress: 80, instructor: 'md' , nextLesson: 'Async/Await'},
  ]

  const Assignments = [
    {id: 1 , title: 'Build a Todo App' , course: 'React Fundamentals',  dueDate: '2025-9-5' , status: 'pending' },
    {id: 2 , title: 'API Integration' , course: 'JavaScript Advanced',  dueDate: '2025-9-30' , status: 'completed' },
    {id: 3 , title: 'Design System' , course: 'Design System',  dueDate: '2025-9-10' , status: 'in-progress' }
  ]
 
  const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  const statusColors =(status) =>{
switch(status){
 
  case'pending':
return 'text-red-600 bg-red-100'
case 'completed' :
  return 'bg-green-100 text-green-600'
  case 'in-progress':
    return ' bg-yellow-100 text-yellow-600'
    default:
      return 'text-gray-600'

}

  }
  return (
    <div className='bg-[#F1F5F9] min-h-screen'>
     <div className='max-w-4xl mx-auto'>
       {/* header */}
       <div className='flex justify-between items-center mt-12 bg-white p-4 shadow rounded-md m-8 md:m-6 lg:mx-0'>
       <div>
       <h1 className='text-xl text-gray-800 md:text-2xl,font-semibold mb-2  , font-bold'>Welcome back, Student!</h1>
         <p className='text-sm text-gray-600  text-wrap'>Here's what's happening with your courses today.</p>
       </div>
       {/* left header */}

       <div className='flex gap-2 items-center'>🔔
        <span className='bg-gradient-to-br from-rose-500 to-red-300 p-1 rounded-full px-3 text-white font-bold text-xl' > S </span>
       </div>
       </div>
       {/* stats */}
       <div>
<div  className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 m-8 md:m-6 lg:mx-0 '>
  {/* icon */}
{
  stats.map(stat => (
    <div className='bg-white shadow p-8 md:p-6 lg:p-4 rounded-md flex gap-2' key={stat.id}>
<span className='text-xl '>{stat.icon}</span>
<div>
  <h3 className='text-l  text-gray-600 font-serif'>{stat.label}</h3>
  <span className='font-bold text-sm text-gray-800'>{stat.value}</span>
</div>
</div>
  )) 
}
</div>
       </div>
{/* courses */}
<div className='grid grid-cols-6  m-8 md:m-6 lg:mx-0 gap-4 '>

<div className='bg-white shadow p-8 md:p-6 lg:p-4 rounded-md col-span-6 md:col-span-4 h-110'>
  <h2 className='text-x md:xl mb-2 text-gray-800 font-semibold'>Courses Progress</h2>
  {
    courses.map(course => (
    <div className=' bg-gray-50  gap-4 mt-4 p-4 rounded-md'key={course.id}>
    
        <div className='flex justify-between ' >
        <h3 className='font-semibold text-l md: text-x mb-2 text-gray-800'>{course.name}</h3>
        <span className='text-gray-600 text-sm'>{course.progress}%</span>
        
        </div>
        <div className='bg-gray-200 rounded-full h-3 mb-2'> </div> 

        <div className='flex justify-between'>
          <span className='text-gray-600 text-sm'>Next: {course.nextLesson}</span>
          <p className='text-gray-600 text-sm'>{course.instructor}</p>
        </div>

        
</div>
      
    ))
    
  }
</div>

{/* assignments */}
<div className='col-span-6 md:col-span-2 flex flex-col gap-4'>
<div className='bg-white shadow  p-8 md:p-6 lg:p-4 rounded-md  '>
  <div>
    <h2 className='text-base font-semibold text-gray-800 '>Upcoming Assignments</h2>
    {
      Assignments.map(as => (
        <div className='mb-4'>
          <div className='flex justify-between mb-1 mt-4'>
            <h3 className='text-base text-gray-800 font-bold, font-semibold'>{as.title}</h3>
            <span className={`${statusColors(as.status)} py-1 px-2 rounded-md text-sm`}>{as.status}</span>
             </div>

             <div className='flex justify-between'>
              <span className='text-sm text-gray-600'>{as.course}</span>
              <span className='text-sm text-gray-600'>{as.dueDate}</span>
               </div>
          
           </div>
      ))
    }
  </div>
 
</div>

 <div className='bg-white shadow p-8 md:p-6 lg:p-4 rounded-md  overflow-hidden '>
  <h2 className='text-base text-gray-800 font-bold, font-semibold mb-2'>announcements</h2>
 {
  announcements.map((an => (
    <div className='flex flex-col  gap-4  border-l-4  
 rounded-md pl-4 border-l-blue-500 mb-4'> 
<div className=' '> 
  <h3  className='text-sm text-gray-800 font-bold, font-semibold'>{an.title}</h3>
  <p className='text-[14px] text-gray-600'>{an.message}</p>
  <span className='text-gray-600 text-[12px]'>{an.time}</span>
</div>

    </div>
  )))
 }
 </div>

</div>

</div>
     </div>
    </div>
  )
}

export default StudentDashboard
