import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs.js', () => {
    
    test('debe de traere 10 elementos', async () => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);

    })

    test('debe de traere 0 elementos', async () => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
    
})
