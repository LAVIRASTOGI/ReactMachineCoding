import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Stopwatch from "../Components/Stopwatch";

jest.useFakeTimers();
test('stopwatch component renders',()=>{
    render(<Stopwatch/>)
    const startElement=screen.getByText('Start')
    const stopElement=screen.getByText('Stop')

    expect(startElement).toBeInTheDocument()
    expect(stopElement).toBeInTheDocument()
})

// test('stopwatch start functionality',async()=>{
//     render(<Stopwatch/>)
//     expect(screen.getByText('00:00:00')).toBeInTheDocument();
//     const startElement=screen.getByText('Start')

//     userEvent.click(startElement)
//     expect(await screen.findByText('00:00:07',{},{timeout:1300})).toBeInTheDocument();
// })

test('stopwatch start functionality',async()=>{
    render(<Stopwatch/>)
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
    const startElement=screen.getByText('Start')

    fireEvent.click(startElement);
    act(()=>{
        jest.advanceTimersByTime(4000);
    })
    expect(screen.getByText('00:00:04')).toBeInTheDocument();
    })

    test('stopwatch start and stop functionality',async()=>{
        render(<Stopwatch/>)
        expect(screen.getByText('00:00:00')).toBeInTheDocument();
        const startElement=screen.getByText('Start')
        const stopElement=screen.getByText('Stop')
    
        fireEvent.click(startElement);
        act(()=>{
            jest.advanceTimersByTime(4000);
        })
        fireEvent.click(stopElement);
        expect(screen.getByText('00:00:04')).toBeInTheDocument();

        })
        test('stopwatch start and reset functionality',async()=>{
            render(<Stopwatch/>)
            expect(screen.getByText('00:00:00')).toBeInTheDocument();
            const startElement=screen.getByText('Start')
            const resetElement=screen.getByText('Reset')
        
            fireEvent.click(startElement);
            fireEvent.click(resetElement);
            expect(screen.getByText('00:00:00')).toBeInTheDocument();
    
            })
    