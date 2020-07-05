import React from "react"
import "../styles.css"

// {"Maximum Yellow":"f8f32b","Charcoal":"2f4550","Fire Engine Red":"c31d2b","Green Munsell":"04a777","Dodger Blue":"3590f3"}

const Tag = ({ value }) => {
    return <div className="tag date-tag">
        {value}
    </div>
}

export default Tag