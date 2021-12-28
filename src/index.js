import "./style.css"
import header from "./header"
import background from "./background"
import homepage from "./home"

const hook = document.querySelector("#content")

hook.appendChild(header())
hook.appendChild(background())