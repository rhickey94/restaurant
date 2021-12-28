import "./style.css"
import header from "./header"
import background from "./background"
import homepage from "./home"
import footer from "./footer"

const hook = document.querySelector("#content")

hook.appendChild(header())
hook.appendChild(background())
hook.appendChild(footer())