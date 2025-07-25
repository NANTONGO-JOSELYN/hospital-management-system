import { CalendarDays, Users, FileText, DollarSign } from "lucide-react";
function TopStats(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-100 p-6 rounded-xl min-h-[140px] flex flex-col justify-between">
          <p className="text-sm text-gray-600">Total Patients</p>
          <div className="flex items-center justify-between mt-4">
            <Users className="text-blue-600 w-6 h-6" />
            <span className="text-2xl font-bold">200</span>
          </div>
        </div>
      
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl min-h-[140px] flex flex-col justify-between">
          <p className="text-sm text-gray-600">Total Reports</p>
          <div className="flex items-center justify-between mt-4">
            <FileText className="text-gray-600 w-6 h-6" />
            <span className="text-2xl font-bold">170</span>
          </div>
        </div>
      
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl min-h-[140px] flex flex-col justify-between">
          <p className="text-sm text-gray-600">Total Appointments</p>
          <div className="flex items-center justify-between mt-4">
            <CalendarDays className="text-green-700 w-6 h-6" />
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>
      
        {/* Card 4 */}
        <div className="bg-green-100 p-6 rounded-xl min-h-[140px] flex flex-col justify-between">
          <p className="text-sm text-gray-600">Total Earnings</p>
          <div className="flex items-center justify-between mt-4">
            <DollarSign className="text-yellow-700 w-6 h-6" />
            <span className="text-2xl font-bold">500000</span>
          </div>
        </div>
      </div>
      
      
      
    )
}
export default TopStats;