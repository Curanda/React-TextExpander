import React, {useState} from "react"

// For public consumption.
// Props for customization :
// 'expand' takes boolean. Put false if you wanna start with expanded text.
// 'styleText' takes css objects for text body.
// 'styleBox' takes css objects for div wrapper.
// 'styleButton' takes css objects for styling 'Show More/Less'.
// 'howShort' takes an int for shortened version of your text.
// 'buttonText' takes a string for a text on expand button. Collapse button by default says 'Show Less'.

function TextExpander({children, expand, styleText, styleBox, styleButton, howShort, buttonText}) {

    const short = children.slice(0, children.length / howShort) + '... '
    const full = children
    const [mode, setMode] = useState(!!expand)
    const [btnTxt, setBtnTxt] = useState(mode ? buttonText : 'Show Less')

    function handleClick() {
        if (mode) {
            setMode(!mode)
            setBtnTxt(expand ? 'Show Less' : buttonText)
        } else {
            setMode(!mode)
            setBtnTxt(expand ? buttonText : 'Show More')
        }
    }

        return (
        <div style={styleBox}>
            <span style={styleText}>
                {mode ? short : full}
            </span>
            <span role={"button"} onClick={handleClick} style={mode ? styleButton : {color: 'blueviolet', cursor: 'pointer'}}>&nbsp;&nbsp;{btnTxt}</span>
        </div>
        )
}

export default TextExpander
