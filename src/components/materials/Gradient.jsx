const Gradient = () => {
    return(
        <div>
            <svg height="100%" width="100%">
            <defs>
                <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stop-color="#004289"/>
                <stop offset="12.75%" stop-color="rgba(0, 66, 137, 0.75)"/>
                <stop offset="25.5%" stop-color="rgba(0, 66, 137, 0.5)"/>
                <stop offset="51%" stop-color="rgba(0, 66, 137, 0)"/>
                </linearGradient>
            </defs>
            <rect fill="url(#0)" height="100%" width="100%"/>
            </svg>
        </div>        
    )
}

export default Gradient;