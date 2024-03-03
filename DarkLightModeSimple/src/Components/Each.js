
import { Children } from "react"

export const Each =({of,render})=>Children.toArray(of.map((item,index)=>render(item,index)))

//of -- for array of users
//render -- callback function