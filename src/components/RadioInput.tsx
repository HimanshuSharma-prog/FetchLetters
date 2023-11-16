export type radioProps = {
    id: string;
    fetchLetter: (id: string, status: string) => void;
    UpdateLetter: (id: string) => void;
}

const RadioInput = ({ id, fetchLetter,UpdateLetter }: radioProps) => {
    return (
        <input type='radio' onChange={() => {
            fetchLetter(id, 'new')
            setInterval(() => {
                UpdateLetter(id)
            }, 2000)
        }} />
    )
}

export default RadioInput