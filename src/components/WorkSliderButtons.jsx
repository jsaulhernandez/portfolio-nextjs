'use client';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

const WorkSliderButtons = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${swiper.isBeginning ? 'disabled:pointer-events-none disabled:opacity-75' : ''}`}
        onClick={() => swiper.slidePrev()}
        disabled={swiper.isBeginning}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${swiper.isEnd ? 'disabled:pointer-events-none disabled:opacity-75' : ''}`}
        onClick={() => swiper.slideNext()}
        disabled={swiper.isEnd}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
