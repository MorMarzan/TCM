import { ContactUs } from '../cmps/ContactUs'
import logo from '/images/favicon.png'
import snails from '/images/snails.png'
import flower from '/images/flower.jpg'

export function HomePage() {
    return (
        <div className="home-page grid">
            <section className="hero grid align-center">
                <div className='headers'>
                    <h2>Taking Care of Myself</h2>
                    <h4>Simple Tools for Self-Therapy</h4>
                </div>
                <div className="img-wrapper">
                    <img src={logo}></img>
                </div>
            </section>

            <section className="main grid">
                <div className="img-wrapper">
                    <img src={flower}></img>
                </div>
                <div className='content'>
                    <p>TCM is a 3 month one-on-one program, where you will learn how to significantly improve the way you take care of yourself.</p>
                    <p>It seems quite basic, and it’s actually not that hard, but surprisingly almost no one is good at it.</p>
                    <p>The first 6 sessions cover the learning process and the rest will work towards supporting you to get established in taking really good care of yourself.</p>
                    <p>The tools used as part of this program work, but the emphasis is not on any specific tool, it goes much deeper. The process helps develop clarity about what is most important for you and the determination to make your life much better.
                        Through the program, you will learn how to break habit patterns which work against you, and instead develop habits that really help you. It will also strengthen your ability to observe your life and the choices you make through a new lens.</p>
                    <p>It is simple, and quite easy, but it will only work if you’re willing to put in the work.</p>
                    <p>Maybe it’s time for you to take better care of yourself?
                        I’ll be happy to help.</p>
                </div>
            </section>

            <div className="img-wrapper-deco flex justify-center">
                <img src={snails}></img>
            </div>

            <ContactUs />
        </div>
    )
}
