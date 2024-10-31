import './planes.scss';
import Step1 from './step-1/step-1';
import Step2 from './step-2/step-2';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hook';
import { getPlan } from '../../shared/service/plan.service';
import backButton from '../../themes/icons/back-button.svg';
import stepper1 from '../../themes/icons/stepper-1.svg';
import stepper2 from '../../themes/icons/stepper-2.svg';
import { useEffect, useState } from 'react';

function Planes() {
  const dispatch = useAppDispatch();
  const x = 2;

  let planData = useAppSelector((state) => state.plan);
  let planSelected: any;

  const changeStep = (a: number) => {
    const step = document.getElementsByClassName('step');
    Array.from(step).forEach((el) => {
      el.classList.remove('show');
    });
    const stepSelect = document.getElementsByClassName('step__' + a)[0];
    stepSelect.classList.add('show');

    const breadcrumStep = document.getElementsByClassName('breadcrum__step');
    Array.from(breadcrumStep).forEach((el) => {
      el.classList.add('inactive');
    });
    const breadcrumStepSelect = document.getElementsByClassName('breadcrum__step-' + a)[0];
    breadcrumStepSelect.classList.remove('inactive');
  };

  const setPlan = (data: any) => {
    planSelected = data;
    changeStep(2);
  }

  
  useEffect(() => {
    dispatch( getPlan() );
    console.log(planSelected); //esta línea se ejecuta la primera vez que se renderiza y en todos los cambios que location tenga, aqui siempre tendrás el ultimo valor de location
  }, [planSelected])
  
  return (
    <div className="planes">
      <div className="breadcrum breadcrum__desktop">
        <div className="breadcrum__step breadcrum__step-1" onClick={() => changeStep(1)}>
          <button>1</button>
          <span>Planes y coberturas</span>
        </div>
        <div className="breadcrum__divide">---</div>
        <div className="breadcrum__step breadcrum__step-2 inactive" onClick={() => changeStep(2)}>
          <button>2</button>
          <span>Resumen</span>
        </div>
      </div>
      <div className="breadcrum breadcrum__movil">
        <img src={backButton} alt="backButton" />
        <div className="breadcrum-stepper">
          <span className="breadcrum-stepper-1 stepper show"> PASO 1 DE 2  <img src={stepper1} alt="stepper1" /></span>
          <span className="breadcrum-stepper-2 stepper"> PASO 2 DE 2  <img src={stepper2} alt="stepper2" /></span>
        </div>
      </div>
      <div className="step step__1 show">
        <Step1 data={{ plan: planData, setPlan }}/>
      </div>
      <div className="step step__2">
        <Step2 key={123} data={planSelected}/>
      </div>
    </div>
  );
}

export default Planes;