import React from 'react'

import { shallow } from 'enzyme'
import { GifDridItem } from '../../components/GifDridItem'

describe('Pruebas de GifDridItem.js', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifDridItem title={ title } url={ url }/>);

    test('debe mostrar el componente correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })
    
    test('debe la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div')
        const classDiv = div.prop('className');
        const resp = classDiv.includes('animate__fadeIn');
       expect(resp).toBe(true);
    })
    
})
