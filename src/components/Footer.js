import React from "react";

function Footer(){
    return(
        <>
            <p style={{
                'color': '#595959',
                'fontFamily': 'sans-serif',
            }}>
                Made with &#128149; by {' '}
                <a
                    style={{ 'textDecoration': 'none', 'color': '#595959', 'fontWeight': 'bolder' }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sanz17">
                    Sanz
                </a>
            </p>
        </>
    )
}

export default Footer;