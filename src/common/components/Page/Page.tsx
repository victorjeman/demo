import style from './Page.module.scss'

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

export const Page = ({ children }: Props) => {
  return <section className={style.page}>{children}</section>
}
