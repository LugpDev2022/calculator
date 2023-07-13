import sun from '/sun.png';
import moon from '/moon.png';

interface Props {
  isThemeDark: boolean;
  handleChange: () => void;
}

const ThemeSwitch: React.FC<Props> = ({ isThemeDark, handleChange }) => {
  return (
    <label
      className={`
        ${isThemeDark ? 'bg-[#0A0B0D]' : 'bg-white'}
        cursor-pointer
        h-6
        relative
        rounded-full
        transition
        w-14
        md:h-8
        md:w-[72px]
      `}
    >
      <input
        type='checkbox'
        className='sr-only peer'
        onClick={handleChange}
        checked={!isThemeDark}
      />
      <img
        src={sun}
        className='
          absolute 
          h-[calc(100%-4px)]
          top-0.5
          left-0.5
        '
      />
      <img
        src={moon}
        className='
          absolute 
          h-[calc(100%-4px)]
          top-0.5
          right-[3px]
        '
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
          peer-checked:left-[32.5px]
          rounded-full
          top-0.5
          transition-all
          md:peer-checked:left-[40.5px]
        '
      ></span>
    </label>
  );
};

export default ThemeSwitch;
