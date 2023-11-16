export type radioProps = {
    id: string;
    fetchLetter: (id: string, status: string) => void
}

const RadioInput = ({ id, fetchLetter }: radioProps) => {
    return (
        <input type='radio' onChange={() => {
            let fetch:string='new'
            setInterval(() => {
                fetchLetter(id, fetch)
                fetch=Math.random().toString()
            }, 2000)
        }} />
    )
}

export default RadioInput