import { useMemo, useState } from "react";
import { supportsViewTransitions } from "./utils/supportsViewTransitions";
import { flushSync } from "react-dom";
// import "./style.css";

type Key = number;

type SwiperProps = {
  defaultActiveSlide?: Key;
  /**
   * This allows astro <slot> to be passed as props
   */
  [key: string]: any;
};

const SwiperItem = (props: { children: React.ReactNode }) => {
  return <div>{props.children}</div>;
};

const Swiper = (props: SwiperProps) => {
  const { defaultActiveSlide, ...slots } = props;
  const [active, setActive] = useState<Key>(defaultActiveSlide ?? 0);
  const slide = Object.keys(slots).filter((key) => key !== "children");

  const prevSlide = useMemo(() => {
    return slide[active <= 0 ? slide.length - 1 : active - 1];
  }, [active, slide]);

  const nextSlide = useMemo(() => {
    return slide[active >= slide.length - 1 ? 0 : active + 1];
  }, [active, slide]);

  const currentSlide = useMemo(() => {
    return slide[active];
  }, [active, slide]);

  const handleNavigation = (direction: "prev" | "next") => {
    const nextActive = (prev: number) =>
      direction === "prev" ? (prev <= 0 ? slide.length - 1 : prev - 1) : prev >= slide.length - 1 ? 0 : prev + 1;

    if (supportsViewTransitions) {
      /** @ts-ignore */
      document.startViewTransition(() => {
        flushSync(() => {
          setActive(nextActive);
        });
      });
      return;
    }

    setActive(nextActive);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();

    console.log(e);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    console.log(e);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    console.log(e);
  };

  return (
    <div>
      <div className="text-2xl text-center">Swiper</div>
      <div className="relative h-full border overflow-hidden">
        <div
          className="w-full h-full absolute top-0 left-24 translate -translate-x-full px-20"
          // style={{ viewTransitionName: `swiper-${prevSlide}` }}
        >
          {slots[prevSlide]}
        </div>

        <div
          className="w-full h-full inset-0  px-20"
          style={{ viewTransitionName: `swiper-${active}` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slots[currentSlide]}
        </div>
        <div
          className="w-full h-full absolute top-0 right-24  translate translate-x-full px-20"
          // style={{ viewTransitionName: `swiper-${nextSlide}` }}
        >
          {slots[nextSlide]}
        </div>
        <div>
          <svg
            role="button"
            onClick={() => handleNavigation("prev")}
            className="w-10 h-10 absolute top-1/2 left-8 transform -translate-y-1/2 cursor-pointer"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#F9F9F9" />
            <path
              d="M34 19C29.3137 23.2958 22 30 22 30C22 30 29.3137 36.7042 34 41"
              stroke="#202325"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            role="button"
            onClick={() => handleNavigation("next")}
            className="w-10 h-10 absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer"
            fill="none"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#F9F9F9" />
            <path
              d="M26 41C30.6863 36.7042 38 30 38 30C38 30 30.6863 23.2958 26 19"
              stroke="#202325"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
