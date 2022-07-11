import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

import style from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  return (
    <div className={style.forgotPassword}>
      <ExplainComponent name='ForgotPassword' images={1}>
        <p>O sa fac functionalitate de resetare a parolei.</p>
        <p>Se conecteaza la store.</p>
        <p>"Back to Login" o sa fie un link catre pagina de login</p>
      </ExplainComponent>
    </div>
  )
}
