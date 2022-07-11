import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Houses = () => {
  return (
    <div>
      <ExplainComponent name='Houses' images={3}>
        <p>Se conecteaza la store si ea lista de houses</p>
        <p>Foloseste componenta HouseThumbnail ca sa afiseze lista</p>
        <p>
          Poate primi un parametru care sa-i specifice daca vrea sa aduca "latest", "big houses", "small houses", etc.
        </p>
        <p>
          In imaginile de mai jos imagineaza-ti ca s-a folosit componenta Houses de 3 ori cu props diferiti ca sa stie
          ce fel de case sa aduca.
        </p>
      </ExplainComponent>
    </div>
  )
}
