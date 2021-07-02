import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en useFetchGifs.js', () => {
    
    test('debe de retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch Man'));
        const { data, loading } = result.current;

        await waitForNextUpdate(); 
        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    })

    test('debe de retornar un arreglo de img y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch Man'));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);
    })
    
    
})
