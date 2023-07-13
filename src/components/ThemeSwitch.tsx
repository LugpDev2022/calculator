import sun from '/sun.png';
import moon from '/moon.png';

interface Props {
  isThemeDark: boolean;
  handleChange: () => void;
}

const ThemeSwitch: React.FC<Props> = ({ isThemeDark, handleChange }) => {
  const switchContainerStyle = `
    bg-${isThemeDark ? '[#0A0B0D]' : 'white'}
    cursor-pointer
    h-6
    relative
    rounded-full
    transition
    w-14
    sm:h-8
    sm:w-[72px]
  `;

  const switchInputStyle = 'sr-only peer';

  const sunIconStyle = `
    absolute
    h-[calc(100%-4px)]
    top-0.5
    left-0.5
  `;

  const moonIconStyle = `
    absolute
    h-[calc(100%-4px)]
    top-0.5
    right-[3.5px]
  `;

  const switchSliderStyle = `
    absolute
    aspect-square
    bg-slate-400
    peer-checked:bg-amber-400
    duration-500
    h-[calc(100%-4px)]
    left-0.5
    peer-checked:left-[32.5px]
    rounded-full
    top-0.5
    transition-all
    md:peer-checked:left-[40.5px]
  `;

  return (
    <label className={switchContainerStyle}>
      <input
        type='checkbox'
        className={switchInputStyle}
        onChange={handleChange}
        checked={!isThemeDark}
      />
      <img src={sun} className={sunIconStyle} alt='Sun Icon' />
      <img src={moon} className={moonIconStyle} alt='Moon Icon' />
      <span className={switchSliderStyle}></span>
    </label>
  );
};

export default ThemeSwitch;
