import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Deactivate = () => {
  return (
    <div>
      <ExplainComponent name='Deactivate' images={1}>
        <p>Componenta asta se conecteaza la store doar ca sa poata apela metoda "deactivate" de acolo.</p>
        <p>Ar trebui sa se afiseze un modal de confirmare atunci cand vrei sa dai deactivate</p>
      </ExplainComponent>
    </div>
  )
}
