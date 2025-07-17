import React from "react";
import { Container } from "react-bootstrap";
import "../assets/css/VoiceTranslater.css";
import { MdVoiceChat } from "react-icons/md";
import { LuSpeech } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMicrophoneAlt } from "react-icons/fa";



const VoiceTranslaterTabing = () => {
  return (
    <React.Fragment>
      <div className="mt-100">
        <Container>
          <div>
            <h1 className="translaterTitle text-center">
              The most realistic voice AI platform
            </h1>

            <div className="translaterDescription">
              <p>
                {" "}
                AI voice models and products powering millions of developers,
                creators, and enterprises. From low‑latency conversational
                agents to the leading AI voice generator for voiceovers and
                audiobooks.
              </p>
            </div>
            <div className="contatBtnDiv">
              <div>
                <a href="#" className="contactSignUpLink">
                  Sign up
                </a>
              </div>
              <div className="anim-fade-translate-y-in">
                <a className="contactSignUpLink contactBtn" href="#">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
          <div className="mt-64">
            <div className="d-flex justify-content-center gap-10 ">
              <button className="tabBtn">
                <MdVoiceChat className="tabIcon" /> Text to Speech
              </button>
              <button className="tabBtn">
                <LuSpeech className="tabIcon" /> Speech to Text
              </button>
              <button className="tabBtn">
                <GiArtificialIntelligence className="tabIcon" /> Conversational AI
              </button>
              <button className="tabBtn">
                <FaMicrophoneAlt className="tabIcon" /> Dubbing
              </button>
              <button className="tabBtn">
                <MdVoiceChat className="tabIcon" /> Voice Cloning
              </button>
              <button className="tabBtn">
                <MdVoiceChat className="tabIcon" /> ElevenReader
              </button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VoiceTranslaterTabing;
