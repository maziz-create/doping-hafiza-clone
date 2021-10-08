//backgrounds
import yks2021 from '../../assets/backgrounds/yks2021-bg.jpg'

import './style.css'

import { useSelector } from 'react-redux'

function HomepageBackground() {
    const bg = useSelector(state => state.backgrounds.activeBackground);

    // console.log('bg =>', bg);

    const setBackground = () => {
        if (bg === 'yks2021') {
            return yks2021;
        }
    }

    const setBackgroundColor = () => {
        if (bg === 'tytayt') {
            return `linear-gradient(
                105.05deg, #824FD5 0%, #9568DE 55.36%, #A57DE9 99.52%)`;
        }
        else if (bg === 'egitim') {
            return `linear-gradient(to right, #00b4db, #0083b0)`;
        }
        else if (bg === 'yks2022') {
            return `linear-gradient(
                144deg, rgb(1, 181, 211) 0%, rgb(3, 11, 53) 90%)`;
        }
    }
    return (
        <div
            className="sliceBackground"
            style={{
                backgroundImage: `url(${setBackground()})`,
                background: `${setBackgroundColor()}`,
            }}
        >

        </div>
    )
}

export default HomepageBackground
