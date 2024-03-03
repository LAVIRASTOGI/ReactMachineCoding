import { render, screen } from "@testing-library/react"
import App from "../App"

test('app component renders without crashing',()=>{
    render(<App/>)
})
test('stopwatch component renders',()=>{
    render(<App/>)
    const startElement=screen.getByText('Start')
    const stopElement=screen.getByText('Stop')

    expect(startElement).toBeInTheDocument()
    expect(stopElement).toBeInTheDocument()
})