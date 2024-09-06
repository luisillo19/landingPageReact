import { RiSearchLine } from "react-icons/ri";
import ButtonConsulting from "../ButtonConsulting";
import './style.css'

type SearchConsultingContainerProps={
    className?: string,
    // Icon: React.ElementType<{className?:string}>
}

export default function SearchConsultingContainer({className}:SearchConsultingContainerProps) {
  return (
    <div className= {className}>
        <RiSearchLine className='search__icon'/>
        <ButtonConsulting text="Free Consulting" className="button__consulting"/>
    </div>
  )
}
