import './App.css'
import { Card } from './components/Card'
import RadioInput from './components/RadioInput'
import { UpdateCard, addCard } from './redux/slice'
import { useAppDispatch, useAppSelector } from './redux/store'

export type letters = {
  id: string;
  letter: string;
}

export type card = {
  id: string;
  letter: letters[]
}

// export type fetchId

const App = () => {
const radioArray=['0','1','2','3','4','5','6']

  const cardData=useAppSelector(state=>state.cards)
  const dispatch=useAppDispatch()

  const fetchLetters=async (id:string,status:string)=>{
    const res=await fetch(`https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/${id}`)
    const result=await res.json()
    const leterData:letters={
      id:Math.random().toString(),
      letter:result.letter
    }
    if(result.letter&&result.letter!==' '){
      if(status==='new'){
        const cardData:card={
          id:id,
          letter:[leterData]
        }
        dispatch(addCard(cardData))
      }
    }
    console.log(cardData)
    console.log(result)
  }

  const updateLetters=async (id:string)=>{
    const res=await fetch(`https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/${id}`)
    const result=await res.json()
    const leterData:letters={
      id:Math.random().toString(),
      letter:result.letter
    }
    if(result.letter&&result.letter!==' '){
      const updateData={
        id:id,
        letter:leterData
      }
      dispatch(UpdateCard(updateData))
    }
    console.log(cardData)
    console.log(result)
  }


  return (
    <div className='mainDiv'>
      <h1>Fetch letters</h1>
      <p>Select the radio button to display the letter cards</p>
      <div className='inputDiv'>
      {radioArray.map((elem)=>(
        <RadioInput key={elem} id={elem} fetchLetter={fetchLetters} UpdateLetter={updateLetters}/>
      ))}
      </div>
      <div className='cardContainer'>
        {cardData?.map((elem)=>(
          <Card radio={elem.id} letters={elem.letter} key={elem.id} />
        ))}
      </div>
    </div>
  )
}

export default App