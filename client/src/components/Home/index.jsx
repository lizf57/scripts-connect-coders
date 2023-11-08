import Typewriter from "typewriter-effect"

import './Home.css'

function Home() {

  return (
    <>
    <div className='home-container'>
      <div className='container'>
          {/* <img src="/images/script.png" className="logo-image" alt="logo-photo"/> */}
      <div>
        <div className="typing">

            <Typewriter
                
                options={{
                  loop: true,
                }}

                onInit={(typewriter) => {
                    typewriter
                        .typeString("connecting coders")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("one script at a time.")
                        .pauseFor(1000)
                        .start();
                }}


            />
        </div>
      </div>

        <div>
          <div className='login-signup'>
                <button>login</button>
                <button>signup</button>
          </div>
        </div>

      </div>
    </div>


    </>
  )
}

export default Home
