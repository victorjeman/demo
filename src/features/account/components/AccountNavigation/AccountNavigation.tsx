import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const AccountNavigation = () => {
  return (
    <div>
      <ExplainComponent name='AccountNavigation' images={1}>
        <p>Component care o sa folosesc react-router-dom ca sa schimbe subpaginile necesare pentru account</p>
        <p>
          Ar fi fain ca paginile sa aiba formatul "/account/profile", "/account/security", "account/notofications",
          "account/messages"
        </p>
        <p>
          Componenta o sa se conecteze de asemenea la store ca atunci cand dam click pe "Logout" sa putem apela o
          functie din AuthStore
        </p>
      </ExplainComponent>
    </div>
  )
}
