import Logo from '../../../../Header/Menu/Logo'
import './style.css'

type LogoContentProps = {
  logoContent: string
}

export default function LogoContent({logoContent}: LogoContentProps) {
  return (
    <article className={logoContent}>
        <Logo src='/public/logo.png' alt='Company Logo' className='logo' />
    </article>
  )
}
