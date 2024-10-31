import './plan.scss';
import iconHome from '../../../themes/icons/home.svg';
import iconClinica from '../../../themes/icons/clinica.svg';
import { List } from '../../../model/plan.model';

function Plan(props: any) {
  const plan: List = props.data.plan;
  const getPlan = props.data.getPlan;

  const selectPlan = (data: any) => {
    getPlan(data);
  };

  return (
    <div className="quote__select-card-pl quote__select-card-2">
        <div className="select-card__image">
            <div className="select-card__head">
                {plan.name}
                <div className="select-card__cost">
                    <div className="select-card__cost-title">COSTO DEL PLAN</div>
                    <div className="select-card__cost-amount">$ {plan.price} al mes</div>
                </div>    
            </div>
            <img src={iconHome} height={50} width={50} alt="Home" />
        </div>
        <hr className="select-card__hr"/>
        <div className="select-card__description">
            <ul>
                {plan.description.map((model: any, i: any) => {  
                    return (<li key={i}>{model}</li>) 
                })}
            </ul>
        </div>
        <div className="select-card__button">
            <button onClick={() => selectPlan(plan)}>Seleccionar Plan</button>
        </div>
    </div>
  );
}

export default Plan;