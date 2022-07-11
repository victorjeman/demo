import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

import style from './ResetPassword.module.scss'

export const ResetPassword = () => {
  return (
    <div className={style.resetPassword}>
      <ExplainComponent name='ResetPassword' images={1}>
        <p>O sa fac functionalitate de resetare.</p>
        <p>Se conecteaza la store.</p>
      </ExplainComponent>
    </div>
  )
}
