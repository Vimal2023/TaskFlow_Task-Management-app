import { Sparkle } from 'lucide-react'

interface TaskFiltersProps {
  statusFilter: 'all' | 'pending' | 'in-progress' | 'completed'
  onStatusFilterChange: (status: 'all' | 'pending' | 'in-progress' | 'completed') => void
  taskCount: number
}

const TaskFilters = ({ statusFilter, onStatusFilterChange, taskCount }: TaskFiltersProps) => {
  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ] as const

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 w-full max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkle className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 dark:text-gray-400" />
          <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
            Filter by status:
          </span>
        </div>

        <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mt-4 flex flex-wrap justify-start sm:justify-between gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onStatusFilterChange(filter.value)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 
              ${
                statusFilter === filter.value
                  ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilters
