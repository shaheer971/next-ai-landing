import { ReactNode } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { SplitText } from "../../../../components/ui/split-text";

export const UserEmpowermentSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[1392px] h-[800px] md:h-[1180px] mx-auto rounded-xl md:rounded-3xl bg-[url(public/1m47yy8ihz9ra5w3ykhkb79xw3s-jpg.png)] bg-cover bg-center border border-solid border-[#ffffff1a] overflow-hidden">
      <div className="relative h-full w-full">
        <div className="w-full max-w-[780px] mx-auto pt-[100px] md:pt-[180px] px-4 md:px-0 text-center">
          <h1 className="font-plus-helvetica font-medium text-white text-[32px] md:text-[52px] tracking-[-0.5px] md:tracking-[-0.96px] leading-[1.2] md:leading-[57.6px]">
            <SplitText
              text="One platform - total control of your B2B business"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              className="inline-block"
            />
          </h1>

          <p className="mt-4 md:mt-6 font-plus-jakarta font-light text-next-ai-3framerwebsitewhite-80 text-base md:text-lg tracking-[0.18px] leading-[24px] md:leading-[28.8px] px-4 md:px-0">
            Centralizing all your monthly expenses in one place to control your cash flow and excel in financial planning.
          </p>

          <div className="mt-8 md:mt-14">
            <SplitText
              text="Start 30-days free trial"
              delay={20}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,15px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              className="inline-block"
            >
              {(animatedText: ReactNode) => (
                <Button
                  variant="default"
                  className="h-12 md:h-14 w-[200px] md:w-[235px] bg-white text-next-ai-3framerwebsiteblack-pearl hover:bg-white/90 rounded-md font-plus-jakarta"
                >
                  <span className="font-bold text-sm md:text-base tracking-[-0.05px] leading-5">
                    {animatedText}
                  </span>
                </Button>
              )}
            </SplitText>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-[1224px] h-[400px] md:h-[611px] mt-[60px] md:mt-[100px] rounded-t-[12px] md:rounded-t-[16px] overflow-hidden border border-solid border-[#ffffff1a]">
          <div
            className="w-full h-full bg-[url(public/oc3rdkc9zzkpp14oysoheqcg44o-png.png)] bg-cover bg-center"
            aria-label="Dashboard visualization"
          />
        </div>
      </div>
    </Card>
  );
};
