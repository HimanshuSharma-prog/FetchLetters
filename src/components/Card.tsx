export type letters={
  id:string;
  letter:string;
}
export type CardProps = {
  radio: string;
  letters: letters[]
}

export const Card = ({ radio, letters }: CardProps) => {
  return (
    <div className="card">
      <p>Radio button ( {radio} ) letter card</p>
      <div className="letterDiv">
        {letters?.map((elem) => (
          <div className="letters" key={elem.id}>
            <p>{elem.letter}</p>
          </div>
        ))}
        {/* <div className="letters">
          <p>a</p>
        </div>
        <div className="letters">
          <p>a</p>
        </div>
        <div className="letters">
          <p>a</p>
        </div>
        <div className="letters">
          <p>a</p>
        </div> */}
      </div>
    </div>
  )
}
