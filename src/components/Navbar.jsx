import React from 'react'
import logo from "../assets/logo.svg"
import textToSpeech from "../assets/text-to-speech.svg"
import speechToText from "../assets/speech-to-text.svg"
import voiceChanger from "../assets/voice-changer.svg"
import textToSoundeffect from "../assets/text-to-sound-effect.svg"
import voiceCloning from "../assets/voice-cloning.svg"
import voiceIsolator from "../assets/voice-isolator.svg"
import voiceDesign from "../assets/voice-design.svg"
import Conversationalai from "../assets/conversational_ai.webp"
import studio from "../assets/studio.svg"
import dubbing from "../assets/dubbing.svg"
import voiceLibrary from "../assets/voice-library.svg"
import elevenReader from "../assets/eleven-reader.svg"
import eleven_v3_alpha from "../assets/eleven_v3_alpha.png"

function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid px-4">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="Elevenlabs" className="w-50 h-50" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PLATFORM
          </a>
          <div className="dropdown-menu"> 

            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            
            <div className="row">
              <div className="col-4 p-3">
                 <div>
                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={textToSpeech} className='w-100 h-100'  alt="text to speech"/>
                            </div>
                            <div className='col-9'> <h5>  Text To Speech </h5> </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={speechToText} className='w-100 h-100' alt="speech to text" />
                            </div>
                            <div className='col-9'> <h5>  Speech To Text </h5> </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={voiceChanger} className='w-100 h-100' alt="voice changer" />
                            </div>
                            <div className='col-9'> <h5>  Voice Changer </h5> </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={textToSoundeffect} className='w-100 h-100' alt="text to sound effect" />
                            </div>
                            <div className='col-9'> <h5>  Text To Sound Effects </h5> </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={voiceCloning} className='w-100 h-100' alt="voice cloning" />
                            </div>
                            <div className='col-9'> <h5>  Voice Cloning </h5> </div>
                        </div>
                    </a>
                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={voiceIsolator} className='w-100 h-100' alt="voice isolator" />
                            </div>
                            <div className='col-9'> <h5>  Voice Isolator </h5> </div>
                        </div>
                    </a>
                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={voiceDesign} className='w-100 h-100' alt="voice design" />
                            </div>
                            <div className='col-9'> <h5>  Voice Design </h5> </div>
                        </div>
                    </a>
                 </div>
              </div>
              <div className="col-4 p-3">
                <div>
                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={Conversationalai} className='w-100 h-100'  alt="text to speech" />
                            </div>
                            <div className='col-9'> 
                               <h5>  Conversational AI </h5>
                               <p> Deploy interactive voice agents</p>
                                </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={studio} className='w-100 h-100' alt="speech to text" />
                            </div>
                            <div className='col-9'>
                                <h5> Studio </h5>
                                <p> Generate and edit long-form audio with precision </p>
                                </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={dubbing} className='w-100 h-100' alt="voice changer" />
                            </div>
                            <div className='col-9'>
                                <h5>  Dubbing </h5> 
                                <p> Localize content across 29 languages with AI dubbing </p>
                                </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={voiceLibrary} className='w-100 h-100' alt="text to sound effect" />
                            </div>
                            <div className='col-9'>
                               <h5> Voice Library </h5> 
                               <p> Find a voice for any character or content </p>
                               </div>
                        </div>
                    </a>

                    <a href="" className="dropdown-item">
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <img src={elevenReader} className='w-100 h-100' alt="voice cloning" />
                            </div>
                            <div className='col-9'> 
                                <h5> ElevenReader </h5> 
                                <p> Listen to any text content on the go</p>
                                </div>
                        </div>
                    </a>
                </div>
              </div>
              <div className="col-4 position-relative p-3">
                <div className="position-absolute">
                    <h5> Meet Eleven V3 alpha</h5>
                    <p> The most expressive text to speech alpha</p>
                </div>
                <img src={eleven_v3_alpha} alt="eleven v3 alpha" className='w-100 h-100'/>
              </div>
            </div>
           
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar