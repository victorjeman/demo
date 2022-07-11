import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Security = () => {
  return (
    <div>
      <ExplainComponent name='Security' images={1}>
        <p>Componenta asta se conecteaza la store ca sa poate folosi o metoda din store pentru update la parola.</p>
      </ExplainComponent>
    </div>
  )
}
