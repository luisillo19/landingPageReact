import Copyright from './Copyright'
import FooterInformation from './FooterInformation';
import './style.css'

const CopyrightData = {
    copyrightContainer: 'copyright__container',
    copyrightContent: 'copyright__content',
    copyrightLink:'copyright__link',
    text:'biztech ',
    hrefLink:'#',
    paragraphContentOne:'Copyright 2023 by ',
    paragraphContentTwo: 'theme All Right Reserved.'
}

const {copyrightContainer, copyrightContent, copyrightLink, text, hrefLink, paragraphContentOne, paragraphContentTwo} = CopyrightData;



export default function CopyInformationContainer() {
    

    return(

        <section>
            <FooterInformation />
            <Copyright copyrightContainer={copyrightContainer} copyrightContent={copyrightContent} copyrightLink={copyrightLink} text={text} hrefLink={hrefLink} paragraphContentOne={paragraphContentOne} paragraphContentTwo={paragraphContentTwo} />
        </section>

    )

}

