import { Card, CardContent } from "../../../../components/ui/card";

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section id="features" className="w-full py-10 md:py-20">
      <div className="container mx-auto px-4 max-w-[1224px]">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-16">
          <h2 className="font-next-ai-3-framer-website-semantic-heading-2 font-[number:var(--next-ai-3-framer-website-semantic-heading-2-font-weight)] text-white text-[28px] md:text-[length:var(--next-ai-3-framer-website-semantic-heading-2-font-size)] text-center tracking-[var(--next-ai-3-framer-website-semantic-heading-2-letter-spacing)] leading-[1.2] md:leading-[var(--next-ai-3-framer-website-semantic-heading-2-line-height)] [font-style:var(--next-ai-3-framer-website-semantic-heading-2-font-style)]">
            All-in-One Dashboard
          </h2>
          <p className="font-['Inter',Helvetica] font-light text-next-ai-3framerwebsitewhite-50 text-base md:text-lg text-center tracking-[0.18px] leading-[24px] md:leading-[28.8px] mt-3 md:mt-5 px-4">
            Instant insights, personalized control – your financial dashboard
            powerhouse.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Integration Card - Full Width */}
          <Card className="col-span-1 lg:col-span-2 bg-next-ai-3framerwebsitewhite-5 rounded-xl md:rounded-2xl border border-solid border-[#ffffff1a] overflow-hidden">
            <CardContent className="p-0 h-[280px] md:h-[344px] relative">
              <div className="p-6 md:p-10 h-full flex flex-col justify-end">
                <div className="absolute w-full h-[120px] md:h-[156px] top-6 md:top-10 left-0">
                  <img
                    className="w-full h-[52px] md:h-[68px]"
                    alt="Section mask group"
                    src="public/section-mask-group-1.svg"
                  />
                  <img
                    className="w-full h-[52px] md:h-[68px] mt-4 md:mt-5"
                    alt="Section mask group"
                    src="public/section-mask-group-2.svg"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="font-next-ai-3-framer-website-inter-bold font-[number:var(--next-ai-3-framer-website-inter-bold-font-weight)] text-white text-[20px] md:text-[length:var(--next-ai-3-framer-website-inter-bold-font-size)] tracking-[var(--next-ai-3-framer-website-inter-bold-letter-spacing)] leading-[1.3] md:leading-[var(--next-ai-3-framer-website-inter-bold-line-height)] [font-style:var(--next-ai-3-framer-website-inter-bold-font-style)]">
                    Integration with finance services
                  </h3>
                  <p className="font-next-ai-3-framer-website-inter-light font-[number:var(--next-ai-3-framer-website-inter-light-font-weight)] text-next-ai-3framerwebsitewhite-70 text-[14px] md:text-[length:var(--next-ai-3-framer-website-inter-light-font-size)] tracking-[var(--next-ai-3-framer-website-inter-light-letter-spacing)] leading-[1.5] md:leading-[var(--next-ai-3-framer-website-inter-light-line-height)] [font-style:var(--next-ai-3-framer-website-inter-light-font-style)] mt-3 md:mt-5">
                    Streamline your financial experience by connecting with
                    various finance services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visualize Finances Card - Tall */}
          <Card
            className="col-span-1 row-span-1 lg:row-span-2 bg-transparent rounded-xl md:rounded-2xl border border-solid border-[#ffffff1a] overflow-hidden h-[280px] md:h-auto"
            style={{
              backgroundImage:
                "url(public/exlxkimbaihsb6myoirladrfzua-png.png)",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          >
            <CardContent className="p-10 h-full flex flex-col">
              <div>
                <h3 className="font-next-ai-3-framer-website-inter-bold font-[number:var(--next-ai-3-framer-website-inter-bold-font-weight)] text-white text-[20px] md:text-[length:var(--next-ai-3-framer-website-inter-bold-font-size)] tracking-[var(--next-ai-3-framer-website-inter-bold-letter-spacing)] leading-[1.3] md:leading-[var(--next-ai-3-framer-website-inter-bold-line-height)] [font-style:var(--next-ai-3-framer-website-inter-bold-font-style)]">
                  Visualize your finances
                </h3>
                <p className="font-next-ai-3-framer-website-inter-light font-[number:var(--next-ai-3-framer-website-inter-light-font-weight)] text-next-ai-3framerwebsitewhite-80 text-[14px] md:text-[length:var(--next-ai-3-framer-website-inter-light-font-size)] tracking-[var(--next-ai-3-framer-website-inter-light-letter-spacing)] leading-[1.5] md:leading-[var(--next-ai-3-framer-website-inter-light-line-height)] [font-style:var(--next-ai-3-framer-website-inter-light-font-style)] mt-3 md:mt-5">
                  Gain insights into your financial trends <br />
                  through clear graphics showcasing <br />
                  income and spending patterns.
                </p>
              </div>
              <div className="mt-10 flex-grow overflow-hidden">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(public/qvsj6faxpugibzz8xmeaqixc8-png.png)",
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Payments Card */}
          <Card
            className="col-span-1 bg-transparent rounded-xl md:rounded-2xl border border-solid border-[#ffffff1a] overflow-hidden h-[280px] md:h-[475px]"
            style={{
              backgroundImage: "url(public/89jvrplmrxf0fcm7vcjt7vs9u0-png.png)",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          >
            <CardContent className="p-10 h-full flex flex-col">
              <div
                className="w-full h-[200px] md:h-[262px] rounded-xl backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] bg-cover bg-center mb-10"
                style={{
                  backgroundImage:
                    "url(public/wot43l5qmexobwlqcb4xuq291qi-png.png)",
                }}
              ></div>
              <div className="mt-auto">
                <h3 className="font-next-ai-3-framer-website-inter-bold font-[number:var(--next-ai-3-framer-website-inter-bold-font-weight)] text-white text-[20px] md:text-[length:var(--next-ai-3-framer-website-inter-bold-font-size)] tracking-[var(--next-ai-3-framer-website-inter-bold-letter-spacing)] leading-[1.3] md:leading-[var(--next-ai-3-framer-website-inter-bold-line-height)] [font-style:var(--next-ai-3-framer-website-inter-bold-font-style)]">
                  Upcoming payments
                </h3>
                <p className="font-next-ai-3-framer-website-inter-light font-[number:var(--next-ai-3-framer-website-inter-light-font-weight)] text-next-ai-3framerwebsitewhite-80 text-[14px] md:text-[length:var(--next-ai-3-framer-website-inter-light-font-size)] tracking-[var(--next-ai-3-framer-website-inter-light-letter-spacing)] leading-[1.5] md:leading-[var(--next-ai-3-framer-website-inter-light-line-height)] [font-style:var(--next-ai-3-framer-website-inter-light-font-style)] mt-3 md:mt-5">
                  Track and manage your upcoming <br />
                  payments with our insightful overview.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Multiple Cards Card */}
          <Card className="col-span-1 bg-next-ai-3framerwebsitewhite-5 rounded-xl md:rounded-2xl border border-solid border-[#ffffff1a] overflow-hidden h-[280px] md:h-[475px]">
            <CardContent className="p-10 h-full flex flex-col">
              <div>
                <h3 className="font-next-ai-3-framer-website-inter-bold font-[number:var(--next-ai-3-framer-website-inter-bold-font-weight)] text-white text-[20px] md:text-[length:var(--next-ai-3-framer-website-inter-bold-font-size)] tracking-[var(--next-ai-3-framer-website-inter-bold-letter-spacing)] leading-[1.3] md:leading-[var(--next-ai-3-framer-website-inter-bold-line-height)] [font-style:var(--next-ai-3-framer-website-inter-bold-font-style)]">
                  Multiple сards
                </h3>
                <p className="font-next-ai-3-framer-website-inter-light font-[number:var(--next-ai-3-framer-website-inter-light-font-weight)] text-next-ai-3framerwebsitewhite-70 text-[14px] md:text-[length:var(--next-ai-3-framer-website-inter-light-font-size)] tracking-[var(--next-ai-3-framer-website-inter-light-letter-spacing)] leading-[1.5] md:leading-[var(--next-ai-3-framer-website-inter-light-line-height)] [font-style:var(--next-ai-3-framer-website-inter-light-font-style)] mt-3 md:mt-5">
                  Amplify your financial freedom with smart <br />
                  and secure payment solutions.
                </p>
              </div>
              <div className="mt-10 flex-grow">
                <div
                  className="w-full h-64 md:h-64 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(public/saims9ifuxghh8d5x0ctddhfasc-png.png)",
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
