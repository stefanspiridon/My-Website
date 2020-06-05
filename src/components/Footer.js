import React from 'react'
import pdf from '../files/StefanSpiridonResume.pdf'

const github = {color: "#ea483a",
                padding: "1%",
                allign: "center",
                display: "inline-flex"
}
const linkedin = {color: "#a8ff8e",
padding: "1%",
allign: "center",
display: "inline-flex"
}
const twitter = {color: "#00cafa",
padding: "1%",
allign: "center",
display: "inline-flex"
}
const resume = {color: "#eeee64",
padding: "1%",
allign: "center",
display: "inline-flex"
}

function Footer(){
    return(
        <h3 className="Footer">
            <a style={github}  href="https://github.com/stefanspiridon" target="_blank" rel="noopener noreferrer">github</a>
            <a style={linkedin}  href="https://www.linkedin.com/in/stefan-spiridon-46a4751ab/" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a style={twitter} href="https://twitter.com/bd_stefan" target="_blank" rel="noopener noreferrer">twitter</a>
            <a style={resume}  href={pdf} download>resume</a>
        </h3>
    )
}

export default Footer