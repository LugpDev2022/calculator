type Props = {
  showOnScreen: string;
};

export const Screen: React.FC<Props> = ({ showOnScreen }) => {
  return (
    <div className='row bg-white rounded-5'>
      <div className='col-12 py-2'>
        <span className='fs-5'>{showOnScreen}</span>
      </div>
    </div>
  );
};
