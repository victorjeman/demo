import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

import style from './SplitView.module.scss'

export const SplitView = () => {
  return (
    <div className={style.splitView}>
      <ExplainComponent name='SplitView' images={1}>
        <p>Imparte view-ul in 2 si e folosit in mai multe pagini.</p>
      </ExplainComponent>
    </div>
  )
}
