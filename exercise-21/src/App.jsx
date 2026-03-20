import StudentDashboard from "./StudentDashboard"
import { useState } from "react"

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

const status = [
  { label: 'Average Grade', value: '88%', icon: '📊' },
  { label: 'Attendance', value: '95%', icon: '📅' },
  { label: 'Assignments Completed', value: '90%', icon: '✅' },
  { label: 'Participation', value: '85%', icon: '🗣️' },
];

const courses = [
  { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
  { id: 2, name: 'Advanced JavaScript', progress: 50, instructor: 'David Lee', nextLesson: 'Asynchronous JS', color: 'green' },
  { id: 3, name: 'UI/UX Design', progress: 30, instructor: 'Emily Davis', nextLesson: 'Design Principles', color: 'purple' },
];

const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'JavaScript Quiz', course: 'Advanced JavaScript', dueDate: '2024-03-22', status: 'pending' },
    { id: 3, title: 'Design a Portfolio', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'pending' },
  ];

  const announcements = [
    { id: 1, title: 'New Course Available: TypeScript Basics', date: '2024-03-15' },
    { id: 2, title: 'Live Q&A Session with Instructors', date: '2024-03-18' },
    { id: 3, title: 'Course Feedback Survey', date: '2024-03-20' },
  ];


  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between ">
      <div >
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back Student!</h1>
      <p className="text-gray-600">Here's what's new in your courses.</p>
      </div>
      <div className="flex items-center justify-center gap-4">
      <div className="relative">
        <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
        <button className="p-1 font-bold text-xl text-gray-400 hover:text-gray-500">🔔</button>
      </div>
         <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">s</div>
      </div>
      </div>
    </div>

    {/* Tab Navigation */}
    <div className="max-w-7xl mx-auto mb-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex space-x-1">
          <button
            onClick={() => handleTabClick('overview')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabClick('courses')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'courses'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => handleTabClick('assignments')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'assignments'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => handleTabClick('announcements')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'announcements'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Announcements
          </button>
        </div>
      </div>
    </div>

    {/* Tab Content */}
    <div className="max-w-7xl mx-auto">
      {activeTab === 'overview' && (
        <>
          {/* Status Cards */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
           {
            status.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 flex items-center gap-4 py-6">
                <div className="flex justify-between">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-xl font-bold text-gray-800">{item.value}</p>
                </div>
              
              </div>
                </div>
            ))
           }
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Courses</h2>
              <div className="space-y-3">
                {courses.slice(0, 2).map(course => (
                  <div key={course.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{course.name}</h3>
                      <p className="text-sm text-gray-500">{course.progress}% complete</p>
                    </div>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-${course.color}-500`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Assignments</h2>
              <div className="space-y-3">
                {assignments.slice(0, 2).map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">Due {assignment.dueDate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'courses' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Courses Progress</h2>
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                  <span className="text-sm text-gray-500">Progress: {course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className={`h-2.5 rounded-full bg-${course.color}-500`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                <p className="text-sm text-gray-500">Next Lesson: {course.nextLesson}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Assignments</h2>
          <div className="space-y-4">
            {assignments.map(assignment => (
              <div key={assignment.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                  <p className="text-sm text-gray-500">{assignment.course}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                    }`}>
                    {assignment.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'announcements' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Announcements</h2>
          <div className="space-y-4">
            {announcements.map(announcement => (
              <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
   </div>
  )
}


export default App;
