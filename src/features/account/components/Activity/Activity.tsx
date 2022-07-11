import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Activity = () => {
  return (
    <div>
      <ExplainComponent name='Activity' images={1}>
        <p>Componenta asta se conecteaza la store si preia o lista</p>
        <p>
          Fiecare item din lista ar putea fi o componenta de tip presentation care primeste informatiile necesare doar
          prin props
        </p>
      </ExplainComponent>
    </div>
  )
}
