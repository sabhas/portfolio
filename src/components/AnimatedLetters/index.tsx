import "./index.scss"

type Props = {
  letterClass: string
  strArray: string[]
  idx: number
}

const AnimatedLetters = ({ letterClass, strArray, idx }: Props) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
