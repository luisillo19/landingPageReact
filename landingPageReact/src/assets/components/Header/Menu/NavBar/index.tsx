import './style.css';
// import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {

  return (
    <nav className='navbar__container'>
        <ul className='navbar__list'>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__uno'>Home</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link_dos'>Services</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__tres'>Pages</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__cuatro'>Shop</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__cinco'>Elements</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__seis'>Blog</a>
            </li>

            <li className='navbar__list-item'>
                <a href='#' className='list__item-link link__siete'>Contact Us</a>
            </li>

        </ul>
    </nav>
  )
}
