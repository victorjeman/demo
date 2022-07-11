import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

import style from './Notifications.module.scss'

export const Notifications = () => {
  return (
    <div className={style.notifications}>
      <ExplainComponent name='Notifications' images={1}>
        <p>Se conecteaza la store </p>
      </ExplainComponent>
    </div>
  )
}
