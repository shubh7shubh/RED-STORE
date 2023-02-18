import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {
        let heightToHidden = 150;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, [])


    return <>
        {isVisible && (
            <div className="wrapper">
                <FaArrowUp className='top_btn' onClick={goToBtn} />
            </div>)}
    </>
}

export default GoToTop