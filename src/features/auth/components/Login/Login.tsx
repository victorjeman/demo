import style from './Login.module.scss'
import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Login = () => {
  return (
    <div className={style.login}>
      <ExplainComponent name='Login' images={1}>
        <p>Componenta care o sa fac functionalitate de login.</p>
        <p>Componenta asta poate fi conectata la store</p>
        <p>Pentru input-uri si butoane o sa avem alte componente generice + o sa folosim antd ca UI Kit</p>
      </ExplainComponent>
    </div>
  )
}
