import React from "react"

const template = `
    <div id="rsg-root"></div>
    <script src="build/styleguide.js"></script>
`

const Styleguide = () => <div dangerouslySetInnerHTML={{ __html: template }} />

export default Styleguide
