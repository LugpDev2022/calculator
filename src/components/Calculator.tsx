import { Screen } from './';

export const Calculator = () => {
  const showOnScreen: string = '1 + 1';

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-11 col-sm-10 col-md-8 col-lg-6 bg-dark rounded-3'>
        <div className='container p-3'>
          <Screen showOnScreen={showOnScreen} />
        </div>
      </div>
    </div>
  );
};
