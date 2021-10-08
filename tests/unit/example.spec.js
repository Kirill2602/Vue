import {mount} from '@vue/test-utils'
//import App from "../../src/App"
import calc from "../../src/components/calc_component"

describe('Calc operations', () => {
    test('Set value', () => {
        const wrapper = mount(calc)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')
        expect(wrapper.vm.operand1).toEqual(1)
    })
    test('Check Radio', async () => {
        const wrapper = mount(calc)
        const radio = wrapper.find('input[id = radio1]')
        await radio.setChecked()
        expect(radio.element.checked).toBeTruthy()
        const radio2 = wrapper.find('input[id = radio2]')
        await radio2.setChecked()
        expect(radio2.element.checked).toBeTruthy()
    })
    test('Check radio 2 + Set value 2', async () => {
        const wrapper = mount(calc)
        const radio = wrapper.find('input[id = radio2]')
        await radio.setChecked()
        const operand2Input = wrapper.find('input[id=operand2]')
        operand2Input.setValue('2')
        expect(wrapper.vm.operand2).toEqual(2)
    })
    test('PLUS', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]') //Радио (переключает активность полей для ввода) по умолчанию операнд 1 активно
        const operand2Input = wrapper.find('input[name=operand2]')  //Нахожу операнд 1
        const operand1Input = wrapper.find('input[name=operand1]') //Нахожу операнд 2
        const btn = wrapper.find('button[name="+"]') // Нахожу кнопку +
        console.log(btn.text())
        operand1Input.setValue('100')//В операнд 1 ставлю 100
        radio2.setChecked()//Переключаюсь с помощью радио на операнд 2
        operand2Input.setValue('1')//В операнд 2 ставлю 1
        expect(wrapper.text()).toContain('Результат:') //Уже от безисходности начал искать по тексту
        await btn.trigger('click')// Жмяк на +
        expect(wrapper.vm.result).toBe(101)// Ожидаю в результате увидеть 101, а на деле там '' - значение которое по умолчанию стоит в result
    })

})
