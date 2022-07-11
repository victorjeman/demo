import { ExplainComponent } from 'common/components/ExplainComponent/ExplainComponent'

export const Messages = () => {
  return (
    <div>
      <ExplainComponent name='Messages' images={1}>
        <p>Se conecteaza la store.</p>
        <p>
          Componenta e destul de complexa si ar putea fi facuta din alte 3 compoentne: - sidebar-ul din stanga - header
          (care arata persoana cu care vorbesti) - sent message - recieved message - input unde scrii mesajul + butonul
          pentru mesaj.
        </p>

        <p>IMPORTANT: Probabil se poate folosi vreo librarie ca sa nu reinventezi roata</p>
      </ExplainComponent>
    </div>
  )
}
