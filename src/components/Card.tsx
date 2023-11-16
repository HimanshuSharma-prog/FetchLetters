export type letters={
  id:string;
  letter:string;
}
export type CardProps = {
  radio: string;
  letters: letters[]
}

export const Card = ({ radio, letters }: CardProps) => {
  const lettersArray=letters.slice(0,30)
  return (
    <div className="card">
      <p>Radio button ( {parseInt(radio)+1} ) letter card</p>
      <div className="letterDiv">
        {lettersArray?.map((elem) => (
          <div className="letters" key={elem.id}>
            <p>{elem.letter}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
