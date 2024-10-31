import { useAppSelector } from '../../../store/hooks/hook';
import './step-1.scss';
import arrowLeft from '../../../themes/icons/arrow-left.svg';
import profileforMe from '../../../themes/icons/icon-for-me.svg';
import profileforOther from '../../../themes/icons/icon-for-other.svg';
import Plan from '../../../shared/components/plan-component/plan';

function Step1(props: any) {

  const setPlan = props.data.setPlan;

  const userData = useAppSelector((state) => state.user);
  const changeOption = (a: number) => {
    const card = document.getElementsByClassName('quote__select-card');
    Array.from(card).forEach((el) => {
      el.classList.remove('select-card');
    });
    const cardSelect = document.getElementsByClassName('quote__select-card-' + a)[0];
    cardSelect.classList.add('select-card');
    document.getElementById('radio-'+a)?.click();

    const plan = document.getElementsByClassName('quote__plan');
    Array.from(plan).forEach((el) => {
      el.classList.remove('show');
    });
    const planSelect = document.getElementsByClassName('quote__plan--' + a)[0];
    planSelect.classList.add('show');
  };
  
  const getPlan = (data: any) => setPlan(data);

  return (
    <div className="step-1">
        <button className="back-btn"><img src={arrowLeft} alt="arrowLeft"/>Volver</button>
        <div className="quote__select">
            <div className="quote__select-title">{userData.name} ¿Para quién deseas cotizar?</div>
            <div className="quote__select-description">Selecciona la opción que se ajuste más a tus necesidades.</div>
            <div className="quote__select-cards">
                <div className="quote__select-card select-card quote__select-card-1" onClick={() => changeOption(1)}>
                    <div className="select-card__checkbox">
                        <input type="radio" id="radio-1" name="cks" />
                    </div>
                    <div className="select-card__profile">
                        <div className="select-card__image"> <img src={profileforMe} alt="profileforMe"/></div>
                        <div className="select-card__head"> Para mi</div>
                    </div>
                    <div className="select-card__description">
                        Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                    </div>
                </div>
                <div className="quote__select-card quote__select-card-2" onClick={() => changeOption(2)}>
                    <div className="select-card__checkbox">
                        <input type="radio" id="radio-2" name="cks" />
                    </div>
                    <div className="select-card__profile">
                        <div className="select-card__image"> <img src={profileforOther} alt="profileforOther"/></div>
                        <div className="select-card__head"> Para alguien más</div>
                    </div>
                    <div className="select-card__description">
                        Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                    </div>
                </div>
            </div>
        </div>
        <div className="quote__plans">
            <div className="quote__plan quote__plan--1 show">
                {props.data.plan.list.slice(0,3).map((model: any, i: any) => {  
                    return (<Plan key={i} data={{ plan: model, getPlan }} />) 
                })}
            </div>
            <div className="quote__plan quote__plan--2">
                {props.data.plan.list.slice(3,6).map((model: any, i: any) => {  
                    return (<Plan key={i+'2'} data={{ plan: model, getPlan }}/>) 
                })}
            </div>
        </div>
    </div>
  );
}

export default Step1;