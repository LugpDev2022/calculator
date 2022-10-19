import { MouseEventHandler } from 'react';

type Props = {
  showOnScreen: string;
  onDeleteButton: MouseEventHandler<HTMLButtonElement>;
};

//TODO: Set max number of characters to 50

export const Screen: React.FC<Props> = ({ showOnScreen, onDeleteButton }) => {
  return (
    <div className='row bg-white rounded-4'>
      <div className='col-12 pe-0 d-flex justify-content-between align-items-center'>
        <span className='py-2 fs-4'>{showOnScreen}</span>
        <button
          className='text-danger rounded-start btn rounded-4 h-100 fs-5'
          onClick={onDeleteButton}
        >
          DEL
        </button>
      </div>
    </div>
  );
};
