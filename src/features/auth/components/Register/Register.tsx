import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

import style from './Register.module.scss'

export const Register = () => {
  return (
    <div className={style.register}>
      <ExplainComponent name='Register' images={1}>
        <p>O sa fac functionalitate de creare a unui utilizator.</p>
        <p>Se conecteaza la store.</p>
        <p>"Log in" o sa fie un link catre pagina de Login</p>
      </ExplainComponent>
    </div>
  )
}
