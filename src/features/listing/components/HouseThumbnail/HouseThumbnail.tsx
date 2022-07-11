import style from './HouseThumbnail.module.scss'

import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const HouseThumbnail = () => {
  return (
    <div className={style.houseThumbnail}>
      <ExplainComponent name='HouseThumbnail' images={1}>
        <p>Componente de tip presentation. Primeste tot ce are nevoie doar prin props</p>
        <p>Nu se conecteaza direct la store</p>
      </ExplainComponent>
    </div>
  )
}
