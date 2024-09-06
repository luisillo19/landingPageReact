import './style.css'

type LogoProps={
    alt?: string,
    className: string
}

export default function Logo({alt = 'Logo', className}: LogoProps) {
  return (
    <div>
        <img src='/logo.png' alt={alt}  className={className} />
    </div>
  )
}
