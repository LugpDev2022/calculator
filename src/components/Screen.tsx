type Props = {
  showOnScreen: string;
};

//TODO: Set max number of characters to 50

export const Screen: React.FC<Props> = ({ showOnScreen }) => {
  return (
    <div className='row bg-white rounded-5'>
      <div className='col-12 fs-5 pe-0 d-flex justify-content-between align-items-center'>
        {showOnScreen}
        <button
          className='text-danger rounded-start btn rounded-5'
          onClick={() => console.log('Delete button pressed')}
        >
          DEL
        </button>
      </div>
    </div>
  );
};
