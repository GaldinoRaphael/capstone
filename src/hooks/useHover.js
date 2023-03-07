import {useState, useRef, useEffect} from 'react'

function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null)

    useEffect(() =>{
        const currentNode = ref.current;

        currentNode.addEventListener('mouseenter', enter)
        currentNode.addEventListener('mouseleave', leave)

        return () => {
            currentNode.removeEventListener('mouseleave', leave)
            currentNode.removeEventListener('mouseenter', enter)
        }
    }, [])

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)
    }

    return [hovered, ref]
}

export default useHover