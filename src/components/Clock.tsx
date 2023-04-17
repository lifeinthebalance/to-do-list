import { useEffect, useState } from "react"


const Clock = () => {
    const [date, setDate] = useState<Date>(new Date())
    function refreshClock(){
        setDate(new Date())
    }
    
    useEffect(() => {
        let timer = setInterval(refreshClock, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <article className="text-center mx-auto lg:text-2xl">
            {new Intl.DateTimeFormat('en-GB', {dateStyle: 'full', timeStyle: 'long', }).format(date)}
        </article>
    )
}

export default Clock