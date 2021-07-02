import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en GifGrid.js', () => {
    const category = 'Naruto';

    test('debe motrar correctamente el componente ', () => {
        
        useFetchGifs.mockReturnValue({
            data : [],
            loading : true
        })
        
        const wrapper = shallow(<GifGrid category={ category }/>)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquie/cosa.jpg',
            title: 'Cualquie cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquie/cosa.jpg',
            title: 'Cualquie cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data : gifs,
            loading : false
        })
        
        const wrapper = shallow(<GifGrid category={ category }/>)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifDridItem').length).toBe(gifs.length);

    })
    
})
