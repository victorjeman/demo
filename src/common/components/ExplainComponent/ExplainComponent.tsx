import style from './ExplainComponent.module.scss'

interface Props {
  images: number
  name: string
  children: JSX.Element | JSX.Element[] | string
}

export const ExplainComponent = ({ images, name, children }: Props) => {
  const imagePaths = [...Array(images).keys()].map((i) => i + 1)

  return (
    <section className={style.explainComponent}>
      <h2> {`<${name} />`}</h2>
      <div>{children}</div>
      {imagePaths.map((image, index) => (
        <img className={style.explainImage} key={index} src={`/images/components/${name}/${image}.jpg`} alt={name} />
      ))}
    </section>
  )
}
