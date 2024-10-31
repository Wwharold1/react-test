import './step-2.scss';
import arrowLeft from '../../../themes/icons/arrow-left.svg';

function Step2(props: any) {
  return (
    <div className="step-2">
        <button className="back-btn"><img src={arrowLeft} alt="arrowLeft"/>Volver</button>
        <div className="quote__select-card-pl quote__select-card-2">
            <div className="select-card__image">
                <div className="select-card__head">
                    {props.name}
                    <div className="select-card__cost">
                        <div className="select-card__cost-title">COSTO DEL PLAN</div>
                        <div className="select-card__cost-amount">$ {props.price} al mes</div>
                    </div>    
                </div>
            </div>
            <hr className="select-card__hr"/>
        </div>
    </div>
  );
}

export default Step2;