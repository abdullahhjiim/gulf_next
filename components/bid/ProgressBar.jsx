import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import flag from '../../public/flag.png';
import Image from 'next/image';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="font-bold">Sold!</div>;
  }

  return (
    <div className=" flex flex-col justify-center items-center gap-y-2">
      <Image src={flag} alt="flag" className="w-12 h-auto" />
      <h6 className="text-[12px] font-semibold">United Arab Amirat</h6>
      <h6 className="text-xl font-bold">$60</h6>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="relative flex justify-center items-center mt-3">
      <CountdownCircleTimer
        isPlaying
        duration={7}
        colors={['#B20A0B', '#B20A0B']}
        colorsTime={[10, 6]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default ProgressBar;
