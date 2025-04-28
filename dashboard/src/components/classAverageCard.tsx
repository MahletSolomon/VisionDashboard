import right from '../assets/rightArrow.svg'
import { ChevronRight } from 'lucide-react'; 
import { Bar, BarChart } from "recharts"
import { ChartContainer } from "@/components/ui/chart"


interface ChartConfig {
  marks: {
    label: string;
    color: string;
  };
}

interface ClassAverageCardProps {
  data: Array<{marks: number }>;
  classAverage: number;
}

const chartConfig : ChartConfig= {

  marks: {
    label: "marks",
    color: "#E16448",
  },
}

const ClassAverageCard : React.FC<ClassAverageCardProps> = ({data, classAverage}) => {  
  
  return (
    <div className='h-full row-span-2 px-4 py-3 border-[0.5px] border-border bg-white rounded-lg '>
        <div className="h-full flex flex-col gap-4">
            <div className='w-full flex justify-between items-center gap-4'>
                <p className='text-text text-sm font-medium'>Class Average</p> 
                <div className='flex items-end space-x-2 hover:cursor-pointer hover:scale-105 rounded-lg group'>
                    <p className='text-text text-sm font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4  '>View</p>
                    <ChevronRight className='text-text group-hover:text-primary transition-all duration-200 ease-in-out' size={16} />
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <p className="text-3xl font-medium">{classAverage}%</p>
                <p className='text-sm text-muted'>Average Grade of class</p>
            </div>

            <ChartContainer config={chartConfig} className="min-h-10 h-20 w-full">
                <BarChart accessibilityLayer data={data}>
                    <Bar dataKey="marks" fill="var(--color-marks)" radius={4} barSize={4}/>
                    {/* <Bar dataKey="name" fill="var(--color-name)" radius={4} /> */}
                </BarChart>
            </ChartContainer>

        </div>
        
    </div>
  )
}

export default ClassAverageCard