import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en AddCategory.js', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    })
    
    test('debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cambiar la caja de texto', () => {
        const value = 'Hola mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });

        expect(wrapper.find('input').prop('value').trim()).toBe(value);
    })
    
    test('No debe de postear la informacion del submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe llamar al setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value').trim()).toBe('');
    })
    
    
})
