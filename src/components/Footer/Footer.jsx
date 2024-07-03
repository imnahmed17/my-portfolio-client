import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <span>Copyright © 2023. All rights are reserved.</span>
                <div className='footer__social'>
                    <a href='https://github.com/imnahmed17/' className='footer__social-icon' target='_blank' rel='noopener noreferrer'>
                        <i className='uil uil-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/imnahmed17/' className='footer__social-icon' target='_blank' rel='noopener noreferrer'>
                        <i className='uil uil-linkedin'></i>
                    </a>
                    <a href='https://www.facebook.com/imnahmed17/' className='footer__social-icon' target='_blank' rel='noopener noreferrer'>
                        <i className='uil uil-facebook'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;