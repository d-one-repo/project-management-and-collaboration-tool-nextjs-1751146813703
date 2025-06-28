import { Clock, Users, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
export default function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'On Hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getProgressWidth = (progress) => {
    return `${progress}%`;
  };
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{project.description}</p>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-primary-600">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary-600">
                {project.progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
            <div
              style={{ width: getProgressWidth(project.progress) }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>Due: {format(new Date(project.dueDate), 'MMM d, yyyy')}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{project.teamSize} members</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {project.team.slice(0, 3).map((member, index) => (
              <div key={index} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                {member.initials}
              </div>
            ))}
            {project.team.length > 3 && (
              <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                +{project.team.length - 3}
              </div>
            )}
          </div>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}