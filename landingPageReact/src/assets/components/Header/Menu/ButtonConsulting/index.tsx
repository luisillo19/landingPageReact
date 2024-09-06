import './style.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type ButtonConsultingProps={
    className?:string,
    text: string
}

export default function ButtonConsulting({className, text}: ButtonConsultingProps) {
  return (
    <>
      <button className={`button__principal ${className}`}>{text}</button>
    </>
    
  )
}

type ButtonSectionProps={
  href: string,
  className?: string,
  text: string
}

export function ButtonSection({href, className, text}: ButtonSectionProps) {
  
  return(

    <div className= {className}>
      <a href={href} className={className}>{text}</a>
    </div>

  )

}

type ButtonSectionHeroLeftProps={
  href?: string,
  className: string,
  text?: string,
  isHero?: boolean
}


export function ButtonSectionHeroLeft({className, isHero, text}: ButtonSectionHeroLeftProps) {
  return (
    
    <div className={className}>
      <button className={className}>
        {isHero && <span className={className}>
          <FaArrowLeftLong />
        </span>}
        {text}
      </button>
    </div>

  )
}

type ButtonSectionHeroRightProps={
  href?: string,
  className: string,
  text?: string,
}


export function ButtonSectionHeroRight({className}: ButtonSectionHeroRightProps) {
  return (
    
    <div className={className}>
      <button className={className}>
        <span className={className}>
          <FaArrowRightLong />
        </span>
      </button>
    </div>

  )
}
