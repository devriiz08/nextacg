const Hero = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col min-h-screen bg-gradient-to-b from-primary via-primary to-white">
          <h1 className="text-2xl text-center lg:text-4xl font-bold text-neutral-900 uppercase">
            Tentang PT Adiya Cahaya Gemilang
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mt-2">
            Kami adalah pionir dalam menciptakan keindahan dan kekuatan dalam
            GRC cetak. Dari desain yang inovatif hingga hasil akhir yang
            estetik, kami membantu Anda mewujudkan impian arsitektur Anda dengan
            sentuhan keahlian kami.
          </p>
          <a href="#tentang" className="flex items-center gap-1 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <p>Scroll Down</p>
          </a>
        </div>
    )
}

export default Hero