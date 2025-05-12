import { useEffect } from 'react'
import { RiGroupLine } from 'react-icons/ri'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './History.css'

const History = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <section className="container mt-5 pt-5" style={{ overflowX: 'hidden' }}>
      <div className="row">
        <div className="col">
          <h2
            className="text-center"
            style={{
              fontFamily: 'Anek Tamil',
              fontSize: '3rem',
              padding: '2rem',
              color: '#198754',
            }}
            data-aos="fade-up"
          >
            கழக வரலாறு
          </h2>
        </div>
      </div>
      <div
        className="row justify-content-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <article className="col-xl-10 col-lg-10 col-sm-12 pb-5">
          <img src="/images/1947.jpg" alt="" className="img-fluid" />
          <p className="lh-5 fs-5 fs-sm-5 pt-3 text-primary">
            “கலைக்களஞ்சியம் என்னும் பொருள் பொதிந்த சொல்லைத் தமிழகத்திற்கு
            வழங்கிய பெருமை தமிழ் வளர்ச்சிக் கழகத்திற்கே உரியதாகும்”
          </p>
        </article>
      </div>
      <div
        className="row justify-content-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="col-xl-8 col-10 first-letter-emp">
          <img
            className="float-start img-thumbnail me-4"
            src="/images/Avinashilingam.png"
            alt="Avinashilingam"
            style={{ width: '20%' }}
          />

          <h2
            className="pb-2"
            style={{
              fontFamily: 'Anek Tamil',
              fontSize: '2rem',
              color: '#198754',
            }}
          >
            தோற்றமும் வளர்ச்சியும்
          </h2>
          <p>
            சென்னை மாகாணக் கல்வி அமைச்சராகத் திகழ்ந்த திரு. தி.சு.
            அவினாசிலிங்கம் செட்டியார் அவர்களால் அனைத்து அறிவுத் துறைகளிலும்
            தமிழ் வளர்ச்சி காணவேண்டும் என்ற தலையாய நோக்கத்தோடு 1946-ஆம் ஆண்டில்
            தமிழ் வளர்ச்சிக் கழகம் தோற்றுவிக்கப்பெற்றது. முதல் முயற்சியாக
            ஆங்கிலத்தில் அமைந்திருப்பது போன்று பெரிய கலைக்களஞ்சியங்களை
            (Encyclopedia) உருவாக்கும் திட்டம் தமிழ் வளர்ச்சிக் கழகத்தால்
            மேற்கொள்ளப்பட்டது. இக்கழகம் தமிழ் வளர்ச்சிக்குரிய பணிகளைத்
            திட்டமிட்டுச் செய்து வருகின்றது.
          </p>
        </div>
      </div>
      <div
        className="row justify-content-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="col-xl-8 col-10 first-letter-emp">
          <h2
            className="pb-2 pt-4"
            style={{
              fontFamily: 'Anek Tamil',
              fontSize: '2rem',
              color: '#198754',
            }}
          >
            கலைக்களஞ்சியத் திட்டம்
          </h2>
          <p>
            தமிழ் வளர்ச்சிக் கழகத்தின் உயர் குறிக்கோளாகிய கலைக் களஞ்சியத்
            திட்டத்தை திரு. தி.சு. அவினாசிலிங்கம் அவர்கள் இந்திய விடுதலை நாளான
            15.08.1947 அன்று அறிவித்தார்கள். திரு. R.K. சண்முகம் செட்டியார்,
            திரு. A.L. முதலியார், வடபாதி மங்கலம் திரு. V.S. தியாகராஜ முதலியார்,
            திரு. T.K.C., திரு. கல்கி ஆகியோர் உதவியுடன், திரு. ம.ப.
            பெரியசாமித்தூரன் அவர்களை ஆசிரியராகக் கொண்டு இம்மாபெரும் பணியைத்
            தொடங்கினார். தமிழ் வளர்ச்சியில் ஆர்வமும் அக்கறையும் கொண்ட அனைத்துத்
            தரப்பு மக்களும் அவருடைய இந்த அறிவிப்பை மெத்த மகிழ்ச்சியுடன்
            வரவேற்றனர்.
          </p>
          <p>
            சென்னைப் பல்கலைக் கழக வளாகத்தில் 20.10.1947-இல் கலைக்களஞ்சியப் பணி
            தொடங்கப் பெற்றது. அன்றைய துணைவேந்தர் முனைவர் ஆ. இலட்சுமணசாமி
            முதலியார் அவர்கள் தலைமையில் கலைக்களஞ்சிய உருவாக்கத்திற்கு ‘அறிஞர்
            குழு’ ஒன்று அமைக்கப்பட்டது. பேராசிரியர் மு.வரதராசன், பேராசிரியர்
            ரா.பி. சேதுப்பிள்ளை, பேராசிரியர் தெ.பொ. மீனாட்சிசுந்தரன், திரு.
            டி.கே. சிதம்பரநாத முதலியார் ஆகியோர் இக்குழுவில் உறுப்பினர்களாக
            இடம்பெற்றனர். கல்கி திரு. ரா. கிருஷ்ண மூர்த்தியும் பேராசிரியர் கே.
            சுவாமிநாதனும் இக்குழுவின் செயலாளர்களாக நியமிக்கப் பெற்றனர். சென்னைப்
            பல்கலைக்கழகம் தமிழ் வளர்ச்சிக் கழக அலுவலகத்திற்கு இடத்தைத் தந்து
            உதவியது. திரு. ம.ப. பெரியசாமித்தூரன் அவர்கள் கலைக்களஞ்சியத்தின்
            தலைமைப் பதிப்பாசிரியராகப் பொறுப்பேற்றார்.
          </p>
          <p>
            தமிழில் கலைக்களஞ்சியம் பத்துத் தொகுதிகளாக கொண்டுவரவேண்டுமென்று
            திட்டமிடப்பட்டது. ஒவ்வொரு தொகுதியும் ஏறத்தாழ 750 பக்கங்களைக்
            கொண்டதாகவும், பொதுமக்களுக்கும் விளங்கக்கூடிய நடையில், அறிவுத்
            துறைகள் அனைத்தையும் திறம்பட எடுத்துரைப்பதாகவும், பல்துறை அறிவு
            பற்றிய பதிவுகளை அகரவரிசைப்படுத்தி, அவற்றைக் கட்டுரை வடிவில் தெளிவாக
            விளக்குவதாகவும் அமைந்த சிறப்பானதோர் அறிவுக் கருவூலமாகக்
            கலைக்களஞ்சியத்தை உருவாக்க வேண்டும் என்றும் திட்டமிடப்பட்டது.
          </p>
          <p>
            கலைக்களஞ்சியக் கருத்துகள் பொதுமக்களுக்கும் நன்றாக விளங்க வேண்டும்
            என்பதால் அதில் நான்கில் ஒரு பாகம் படங்களாக அமைய வேண்டும் என்றும்,
            தேவையான இடங்களில் வண்ணப்படங்களும் புகைப்படங்களும் சேர்க்கப்பட
            வேண்டுமென்றும் முடிவு செய்யப்பெற்றது.
          </p>
          <p>
            கலைக்களஞ்சியம் தயாரிப்பு என்பது எளிய பணியன்று. ஆங்கிலம் போன்ற, ஓரளவு
            கலைக் களஞ்சியப் பாரம்பரியம் உள்ள மொழியிலேயே Chambers Encyclopedia
            வெயிடுவதற்கு 10 ஆண்டுகளாயின. பரவலாகப் பயன்படுத்தப் பெறும்
            Encyclopedia Britannica என்பதன் 9-ஆம் பதிப்பைத் திருத்தி அமைப்பதற்கு
            15 ஆண்டுகளாயின. ஜப்பான் மொழியில் 10 தொகுதிகள் கொண்ட கலைக் களஞ்சியம்
            வெளியிடுவதற்கு 10 ஆண்டுகள் தேவைப்பட்டன.
          </p>
        </div>
      </div>

      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="col-xl-8 col-10 first-letter-emp">
          <h2
            className="pb-2 pt-4"
            style={{
              fontFamily: 'Anek Tamil',
              fontSize: '2rem',
              color: '#198754',
            }}
          >
            கலைக்களஞ்சியக் குழு
          </h2>
          <p>
            தமிழில் கலைக்களஞ்சியத்தை உருவாக்குவதற்குக் கீழ்க்காணும் பல
            தலைப்புகளில் குழுக்கள் நியமிக்கப்பட்டன
          </p>
          {/* ================ */}
          <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-3 align-items-center justify-content-center">
            <div className="list-group">
              <a className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <RiGroupLine className="fs-2 flex-shrink-0 text-success" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h5 className="mb-0 text-primary fs-5">
                      நிர்வாகக் குழுக்கள் 5, உறுப்பினர்கள் 74
                    </h5>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <RiGroupLine className="fs-2 flex-shrink-0 text-success" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h5 className="mb-0 text-primary fs-5">
                      ஆய்வுக்குழுக்கள் 27, உறுப்பினர்கள் 66
                    </h5>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <RiGroupLine className="fs-2 flex-shrink-0 text-success" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h5 className="mb-0 text-primary fs-5">
                      பொருட்பட்டி அமைப்புக் குழுக்கள் 21, உறுப்பினர்கள் 132
                    </h5>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <RiGroupLine className="fs-2 flex-shrink-0 text-success" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h5 className="mb-0 text-primary fs-5">
                      கலைச்சொற் குழு 1, உறுப்பினர்கள் 40
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ========= */}
          <p>
            முதல் தொகுப்பு, அதன் பணி தொடங்கி 1954-இல், 742 பக்கங்களுடன்
            வெளிவந்தது. இதற்கு 207 அறிஞர்கள், அவரவர் நிபுணத்துவம் பெற்ற
            துறைகளில் கட்டுரைகள் வழங்கியுள்ளனர். பணி தொய்வின்றித் தொடர்ந்து
            நடந்தது.1968-இல் 10ஆம் தொகுதி (இணைப்புத் தொகுதி) வெளியாயிற்று.
            இவற்றுள் 5ஆவது தொகுதியை அன்றைய இந்தியப் பிரதமர் ஜவஹர்லால் நேரு
            அவர்கள் வெளியிட்டுள்ளார்கள்.
          </p>
          <p>
            இந்திய மொழிகளில் 10 தொகுதிகளைக் கொண்ட விரிவான கலைக்களஞ்சியம் தமிழில்
            தான் முதன் முதலாக வந்தது என்பது பெருமைப்படத்தக்க செய்தியாகும். இதைத்
            தமிழ் வளர்ச்சிக் கழகத்தின் ஓர் ஒப்பு உயர்வற்ற ஆக்கபூர்வமான தமிழ்த்
            தொண்டாகக் கருதலாம். இவற்றிற்கு 2240 அறிஞர்கள் பங்களிப்புச்
            செய்திருக்கின்றனர்.
          </p>
        </div>
      </div>
      <div
        className="row justify-content-center mt-4"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="col-xl-8 col-10 first-letter-emp">
          <img
            className="float-start img-thumbnail mt-4 me-3"
            src="/images/periyasamy.png"
            alt="Avinashilingam"
            style={{ width: '20%' }}
          />

          <h2
            className="pt-4 pb-2"
            style={{
              fontFamily: 'Anek Tamil',
              fontSize: '2rem',
              color: '#198754',
            }}
          >
            ஆக்கபூர்வமான, முன்னோடியான தமிழ்ப் பணி
          </h2>
          <p>
            கலைக்களஞ்சியத் தரவுகளைச் சேகரிப்பதில் திரு. ம.ப. பெரியசாமித்தூரன்
            அவர்கள் அறிஞர் பெருமக்கள் பலரின் உதவியுடன் முன்னின்று கடுமையாக
            உழைத்தார். இவ் உழைப்பின் பயனாகக் கலைக்களஞ்சியத் தொகுதிகள்
            பின்வருமாறு வெளிவந்தன:
          </p>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="text-primary" scope="col">
                    #
                  </th>
                  <th className="text-primary" scope="col">
                    தொகுதிகள்
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-success" scope="row">
                    1
                  </th>
                  <td className="text-success">1954 - முதல் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    2
                  </th>
                  <td className="text-success">1955 - இரண்டாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    3
                  </th>
                  <td className="text-success">
                    1956 - மூன்று, நான்காம் தொகுதிகள்
                  </td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    4
                  </th>
                  <td className="text-success">1958 - ஐந்தாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    5
                  </th>
                  <td className="text-success">1959 - ஆறாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    6
                  </th>
                  <td className="text-success">1960 - ஏழாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    7
                  </th>
                  <td className="text-success">1961 - எட்டாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    8
                  </th>
                  <td className="text-success">1963 - ஒன்பதாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    9
                  </th>
                  <td className="text-success">1968 - பத்தாம் தொகுதி</td>
                </tr>
                <tr>
                  <th className="text-success" scope="row">
                    10
                  </th>
                  <td className="text-success">இணைப்புத் தொகுதி</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
export default History
