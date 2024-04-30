import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="zeroth_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://linktree.com/amaanbhati", "_blank")
          }
          className="black_btn"
        >
          Connect
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">ZerothAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with zeroth-ai, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <h3 class="text-center">
        Made with ❤️ by <a href="https://amaanbhati.vercel.app"><span className="orange_gradient ">Amaan</span></a>
      </h3>
    </header>
  );
};

export default Hero;
