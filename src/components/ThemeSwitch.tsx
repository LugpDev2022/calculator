import sun from '/sun.png';
import moon from '/moon.png';

interface Props {
  isThemeDark?: boolean;
  handleChange: () => void;
}

const ThemeSwitch: React.FC<Props> = ({ isThemeDark, handleChange }) => {
  const iconStyle = `
    absolute
    h-[calc(100%-4px)]
    top-0.5
  `;

  return (
    <label
      id='Switch-Container'
      className='
        cursor-pointer
        relative
        rounded-full
        transition
        h-8
        w-[72px]
      '
    >
      <input
        type='checkbox'
        className='sr-only peer'
        onChange={handleChange}
        checked={!isThemeDark}
      />
      <img src={sun} className={`${iconStyle} left-0.5`} alt='Sun Icon' />
      <img
        src={moon}
        className={`${iconStyle} right-[3.5px]`}
        alt='Moon Icon'
      />
      <span
        className='
          absolute
          aspect-square
          bg-slate-400
          peer-checked:bg-amber-400
          duration-500
          h-[calc(100%-4px)]
          left-0.5
          peer-checked:left-[40.5px]
          rounded-full
          top-0.5
          transition-all
        '
      ></span>
    </label>
  );
};

export default ThemeSwitch;
