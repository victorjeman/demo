import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Profile = () => {
  return (
    <div>
      <ExplainComponent name='Profile' images={1}>
        <p>
          Componenta asta se conecteaza la store ca sa aiba acces la metodele necesare pentru a face update la "Full
          Name", "Gender", "Date of birth", etc.
        </p>
        <p>
          Pare de asemenea de parca am putea crea o componenta generica de tip presentation pentru fiecare rand in
          parte. Atentie, acea componenta generica ar putea fi pusa in "src/common/components" daca se mai foloseste si
          in alte features.
        </p>
      </ExplainComponent>
    </div>
  )
}
