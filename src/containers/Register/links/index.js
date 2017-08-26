import React from 'react'
import Link from '../Link'

const links = [
    {
        linkText: "Login",
        linkHref: ""
    },
    {
        linkText: "Need help?",
        linkHref: "" 
    }
]

export default () => {
    return (
        <p className="has-text-centered">
       {
           links.map(({ linkText, linkHref }) => (
               <span key={index}> 
                   <Link 
                        linkText={} 
                        linkHref={}
                    />
                    {
                        linksLength == index + 1 ? null : "|"
                    }
                </span>
            ))
       }
        </p>
    )
}