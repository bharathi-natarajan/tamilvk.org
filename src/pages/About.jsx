import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './About.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <section className="about-section">
      <div className="container ">
        <article className="row align-items-start img-txt" data-aos="fade-up">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/Valluvar_side.jpg" alt="Valluvar image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-left"
          >
            <h3>தமிழ் வளர்ச்சிக் கழகம்</h3>
            <p>
              அனைத்து துறைகளிலும் தமிழ் வளர்ச்சியடைய வேண்டுமென்ற நோக்கத்தில்
              1946 ஆம் ஆண்டில் அன்றைய சென்னை மாகாணக் கல்வி அமைச்சர் திரு.
              அவினாசிலிங்கம் செட்டியார் தலைமையில் உருவாக்கப்பட்டது இந்த
              நிறுவனம். அவரோடும் அவரைத் தொடர்ந்தும் திரு. சி. சுப்பிரமணியம்,
              திரு. ராஜா சர் முத்தையா செட்டியார், டாக்டர் ஏ. இலட்சுமணசாமி
              முதலியார், திரு. ம. பெரியசாமித்தூரன் போன்றவர்கள் பங்கேற்று
              வளர்த்து வரும் பெருமைக்குரியது. இந்நிறுவனம் இந்திய மொழிகளுக்கு
              முன்னோடியாக, தமிழ் மொழியில் பத்துத் தொகுதிகள் பொதுக்
              கலைக்களஞ்சியம் அதன் பின்னர் பத்துத் தொகுதிகள் குழந்தைகள்
              கலைக்களஞ்சியம் வெளியிட்ட பெருமைக்குரியது.
            </p>
            <p>
              தமிழ் வளர்ச்சிக் கழகம் (Tamil Academy) 1947 செப்டம்பர் 26ஆம் நாள்
              சங்கச் சட்டத்தின்படி (Registration of Societies ACT XXI of 1980)
              பதிவு செய்யப்பட்டது. பதிவு செய்த நாள் முதல் சென்னைப் பல்கலைக்கழக
              வளாகத்தில் செயற்பட்டு வருகிறது.
            </p>
          </div>
        </article>
        <article className="row align-items-start img-txt" data-aos="fade-down">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/Avinashilingam.png" alt="Founder image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-right"
          >
            <h3>தி.சு. அவினாசிலிங்கம் செட்டியார்</h3>
            <p>
              சென்னை மாகாணக் கல்வி அமைச்சராக இருந்த திரு. தி.சு. அவினாசிலிங்கம்
              செட்டியார் எண்ணத்தில் முதல் முயற்சியாக ஆங்கிலத்தில் அமைந்திருப்பது
              போன்று கலைக்களஞ்சியங்களை (Encyclopedia) உருவாக்கும் திட்டம் தமிழ்
              வளர்ச்சிக் கழகத்தால் மேற்கொள்ளப்பட்டது.
            </p>
          </div>
        </article>
        <article className="row align-items-start img-txt" data-aos="fade-up">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/subramaniam.png" alt="Founder image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-left"
          >
            <h3>பாரதரத்னா திரு. சி. சுப்பிரமணியம்</h3>
            <p>
              பாரதரத்னா திரு. சி. சுப்பிரமணியம் அவர்கள் 08-12-1982-இல் தமிழ்
              வளர்ச்சிக் கழகத்தின் தலைமைப் பொறுப்பை ஏற்றுத் தமிழ் வளர்ச்சிக்கு
              வழிகாட்டுவராயினர். இவர் காலத்தில் குழந்தைகள் கலைக்களஞ்சியம்
              திருந்திய பதிப்பு வெளியிடப் பெற்றது.
            </p>
          </div>
        </article>
        <article className="row align-items-start img-txt" data-aos="fade-up">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/kzalandisamy.png" alt="Leader image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-left"
          >
            <h3>பேராசிரியர் முனைவர் வா.செ. குழந்தைசாமி</h3>
            <p>
              தமிழ் வளர்ச்சிக் கழகத்தின் தலைவராக 10.03.1990 அன்று பேராசிரியர்
              முனைவர் வா.செ. குழந்தைசாமி பொறுப்பேற்றுக்கொண்டார். தமிழ்வளர்ச்சிக்
              கழகம் வெளியிட்ட பொதுக் கலைக்களஞ்சியம் 10 தொகுதிகள் மற்றும
              குழந்தைகள் கலைக்களஞ்சியம் 10 தொகுதிகள் ஆகியவற்றின் குறுந்தகடுகளைப்
              பேராசிரியர் முனைவர் வா.செ. குழந்தைசாமி இணையத்தில் பதிவேற்றிடப்
              பங்களித்துள்ளார்.
            </p>
          </div>
        </article>
        <article className="row align-items-start img-txt" data-aos="fade-up">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/Chidambaram.png" alt="Leader image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-left"
          >
            <h3>திரு. ப. சிதம்பரம்</h3>
            <h4 style={{ lineHeight: '2rem' }}>
              நாடாளுமன்ற மாநிலங்கள் அவை உறுப்பினர்
              <br />
              மேனாள் ஒன்றிய நிதியமைச்சர்
            </h4>
            <p>
              தமிழ் வளர்ச்சிக் கழக அறக்கட்டளையில் தொடர்ந்து தொண்டாற்றி வருபவர்.
              சனவரி 2025 முதல் அறக்கட்டளைத் தலைவராக வழிகாட்டி வழிநடத்தி
              வருகிறார்.
            </p>
          </div>
        </article>
        <article className="row align-items-start img-txt" data-aos="fade-up">
          <div className="col-sm col-xl-4 col-lg-4 abt-img">
            <img src="/images/rajendran.png" alt="Secretary image" />
          </div>
          <div
            className="col-sm col-xl-8 col-lg-8 abt-txt"
            data-aos="fade-left"
          >
            <h3>ம. இராசேந்திரன்</h3>
            <h4>ஆட்சிக் குழுத் தலைவர்</h4>
            <p>
              ம. இராசேந்திரன் (M. Rajendran) தஞ்சை தமிழ்ப்பல்கலைக் கழகத்தில்
              துணைவேந்தராகப் பொறுப்பு வகித்தவர். இவர் தமிழ்ப் பேராசிரியரும்
              எழுத்தாளரும் கணையாழி இதழின் வெளியீட்டாளரும் ஆவார். இவர்
              கோயம்புத்தூரில் 2010 ஆம் ஆண்டில் நடந்த உலகத் தமிழ்ச் செம்மொழி
              மாநாட்டின் ஆய்வரங்க ஒருங்கிணைப்பாளராக வினையாற்றினார். 2022ஆம்
              ஆண்டு சனவரியில் அமைக்கப்பட்ட தமிழ்நாட்டு அரசின் பொதுநூலகச் சட்டம்,
              விதிகள் திருத்த உயர்நிலைக் குழுவிற்குத் தலைவராக இருந்தார். கலைஞர்
              மு. கருணாநிதி செம்மொழித் தமிழ் விருது, முத்தமிழ்க்காவலர் கி.ஆ.பெ.
              விசுவநாதம் விருது ஆகியவை இவருக்கு வழங்கப்பட்டுள்ளன. தற்போது தமிழ்
              வளர்ச்சிக் கழக ஆட்சிக் குழுத் தலைவராக இருக்கிறார்.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default About
