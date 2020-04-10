import { useEffect, useState } from 'react'

export default function useTypingEffect (message) {
    let textData = message
    if (!Array.isArray(message)) {
        textData = [message]
    }

    const [dataText, _] = useState(textData)

    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [speed, setSpeed] = useState(100)
    const [loop, setLoop] = useState(0)

    const index = loop % dataText.length
    const fullText = dataText[index]

    const handleTyping = () => {
        setText(
            isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
        )

        setSpeed(isDeleting ? 30 : 100)

        if (!isDeleting && text === fullText) {
            // stop for speed seconds and start deleting
            setTimeout(() => setIsDeleting(true), speed)
        }
        else if (isDeleting && text === '') {
            // reach the end, stop deleting and increment loop
            setIsDeleting(false)
            setLoop(loop + 1)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleTyping()
        }, speed)
        return () => clearTimeout(timer)
    })

    return [text, setSpeed]
}
