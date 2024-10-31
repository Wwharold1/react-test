import './form-dni.scss';

function FormDni() {
  return (
    <div className="form-dni">
        <div className='form-dni__comp'>
            <div className="input-field input-field--dni">
                <select>
                    <option>DNI</option>
                </select>
            </div>
            <div className="input-field input-field--nro">
                <input type="text" required />
                <label>Nro. de documento</label>
            </div>
      </div>
    </div>
  );
}

export default FormDni;