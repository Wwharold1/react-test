import './insurance-quote.scss';
import { getUser } from '../../shared/service/user.service';
import { useAppDispatch } from '../../store/hooks/hook';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

export const InsuranceQuote = () => {
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  type UserForm = {
    dni: string;
    nroDoc: string;
    celular: string;
    check1: string;
    check2: string;
  }

  const onQuote: SubmitHandler<UserForm> = (data) => {
    dispatch( getUser() ).then( () => {
      navigate('/planes')
    });
  };

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<UserForm>();

  return (
    <div className="insurance">
      <div className='insurance__image'>
        <img src="https://s3-alpha-sig.figma.com/img/899f/1030/7a95965972ec7cdab4f8c8d20d4dd8b8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~fzimzUbUrCNsHJoSF1VervMsclWKBigQ6FMopUvO17QTz~HDZ3qsOQfYjMuE5FjCJDzdAgzoKyMkYB4HGerfm5qNUTn-5CUqyJBJBkVFQSJxy316URPjqWmz-fu2pzBitROKXfvMIeDCnbHdJCMK0qrhRh3h1ixvXiOlMlAuL8N5gJGyVKwCTF-Ih~vEz~ojv~lZYtI74QqJ66Nn7Ho0VPtEyOBPnLtY2vpReD41hqiTLKH4Fsj1YiLfqrtmM6~MkT8hNVSQ5NWaM4KpKKctMIiJj-gN7JfoG4ukqBGs7xIofoj0UKZpA5Ff5b5Do-56rS18OKakNgDVMH3ca1qQ__" />
      </div>
      <div className="insurance__form">
        <div className="form__head">
       

          <div className="form__head-text">
            <div className="form__tool-text">Seguro Salud Flexible</div>
            <div className="form__title">Creado para ti y tu familia</div>
          </div>
          <div className="form__head--image-movil">
            <img src="https://s3-alpha-sig.figma.com/img/899f/1030/7a95965972ec7cdab4f8c8d20d4dd8b8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~fzimzUbUrCNsHJoSF1VervMsclWKBigQ6FMopUvO17QTz~HDZ3qsOQfYjMuE5FjCJDzdAgzoKyMkYB4HGerfm5qNUTn-5CUqyJBJBkVFQSJxy316URPjqWmz-fu2pzBitROKXfvMIeDCnbHdJCMK0qrhRh3h1ixvXiOlMlAuL8N5gJGyVKwCTF-Ih~vEz~ojv~lZYtI74QqJ66Nn7Ho0VPtEyOBPnLtY2vpReD41hqiTLKH4Fsj1YiLfqrtmM6~MkT8hNVSQ5NWaM4KpKKctMIiJj-gN7JfoG4ukqBGs7xIofoj0UKZpA5Ff5b5Do-56rS18OKakNgDVMH3ca1qQ__" />
          </div>
        </div>
        <div className="form__divide">
          <hr />
        </div>
        <div className="form__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</div>
        <form onSubmit={handleSubmit(onQuote)}>
          <div className="form__data">
            <div className="form-dni">
              <div className='form-dni__comp'>
                      <div className="input-field input-field--dni">
                          <select {...register("dni", { required: 'Debe ingresar un tipo documento'})}>
                              <option value="1">DNI</option>
                          </select>
                      </div>
                      <div className="input-field input-field--nro">
                          <input type="number"
                            {...register("nroDoc", 
                              { 
                                required: 'Debe ingresar un numero documento',
                                maxLength: {
                                  value: 8,
                                  message: 'Debe tener 8 caracteres'
                                },
                                minLength: {
                                  value: 8,
                                  message: 'Debe tener 8 caracteres'
                                }
                              })} required />
                          <label>Nro. de documento</label>
                      </div>
              </div>
              {errors.dni && <div className="text-red-500">{errors.dni.message }</div>}
              {errors.nroDoc && <div className="text-red-500">{errors.nroDoc.message}</div>}
            </div>
            <div className="form form__data--phone">
              <div className="input-field input-field-rc">
                <div className="form__data--phone--input">
                  <input type="number" {...register("celular",
                      { 
                        required: 'Debe ingresar un celular',
                        maxLength: {
                          value: 8,
                          message: 'Debe tener 9 caracteres'
                        },
                        minLength: {
                          value: 8,
                          message: 'Debe tener 9 caracteres'
                        }
                      }
                    )} required />
                  <label>Celular</label>
                </div>
              </div>
              {errors.celular && <div className="text-red-500">{errors.celular.message}</div>}
            </div>
          </div>
          <div className="form form__checkbox form__checkbox-polity-comercy">
            <div className="form__checkbox--input">
              <input {...register("check1", { required: 'Debe aceptar los terminos y condiciones'} )} type="checkbox" />
              <span>Acepto lo Pol&iacute;tica de Privacidad</span>
            </div>
            {errors.check1 && <div className="form__error text-red-500">{errors.check1.message}</div>}
          </div>
          <div className="form form__checkbox form__checkbox-polity-community">
            <div className="form__checkbox--input">
              <input {...register("check2", { required: 'Debe aceptar los terminos comerciales'} )} type="checkbox" />
              <span>Acepto lo Pol&iacute;tica de Comunicaciones Comerciales</span>
            </div>
            {errors.check2 && <div className="form__error text-red-500">{errors.check2.message}</div>}
          </div>
          <div className="form_terms-conditions">Aplican Términos y Condiciones</div>
          <div className="form_button">
            <button type="submit">Cotiza aquí</button>
          </div>
        </form>
      </div>
    </div>
  );
}
