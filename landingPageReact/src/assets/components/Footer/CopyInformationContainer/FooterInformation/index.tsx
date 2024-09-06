
import ListElements from './ListElements'
import LogoContent from './LogoContent';
import './style.css'
import { LuPhone } from "react-icons/lu";


const footerData = [
    {
      title: "Quick Link",
      items: [
        {text: "About us",link: "/about-us",type:"link"},
        {text: "Services", link: "/services", type: "link"},
        {text: "Cause", link: "/cause", type:"link"},
        {text: "Pricing", link: "/pricing", type: "link"},
        {text: "Contact Us", link: "/contact-us", type: "link"}
      ]
    },
    {
      title: "Usefull Links",
      items: [
        {text: "Privacy Policy", link: "/privacy-policy", type: "link"},
        {text: "Terms & Condition", link: "/terms-&-condition", type: "link"},
        {text: "Support", link: "/support", type: "link"},
        {text: "Disclaimer", link: "/disclaimer", type: "link"},
        {text: "Faq", link: "/faq", type: "link"}
      ]
    },
    {
      title: "Contact",
      items: [
        {text: "Tincidunt neque pretium lectus donec risus.", type: "text"},
        {text: "New Hyde Park, NY 11040", type: "icon", icon: LuPhone },
        {text: "example@info.com", type: "icon",icon: LuPhone},
        {text: "333 666 0000", type: "icon", icon: LuPhone } 
      ]
      
    }
  ];

export default function FooterInformation() {
    
    return (

      <div>
        <LogoContent logoContent={''} />
             {footerData.map((section) => (
                  <ListElements 
                    key={section.title} 
                    title={section.title} 
                    items={section.items} 
                />
                 ))}
        </div>
    );


}