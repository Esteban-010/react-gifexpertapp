import React from 'react';
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp.js', () => {
    
    test('debe imprimirse correctamente', () => {
        const  wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe imprimirse una lista de categorias', () => {
        const categories = ['Saitama', 'Goku'];
        const  wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    

})
