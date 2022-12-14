import { useState, useEffect } from 'react';
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { SocialIcon } from 'react-social-icons';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['A Sixth Form Student', 'An Aspiring Programmer', 'The Next Generation'];
    const [text, setText] = useState(''); 
    const [delta, SetDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            SetDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true)
            SetDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            SetDelta(500)
        }
    }

    return (
        <section className='banner padding' id='home'>
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <h1>{`Hi! I'm Luke,`}<br /><span className='txt-rotate'><span className='cursor'>{text}</span></span></h1>
                    <p></p>
                    <SocialIcon url='https://github.com/Turnyanskiy' fgColor='white' className='socials'/>
                    <SocialIcon url='https://www.linkedin.com/in/luke-turnyanskiy/' className='socials'/>
                    <SocialIcon url='https://www.youtube.com/' className='socials'/>
                    
                </div>}
            </TrackVisibility>
        </section>
    )
}