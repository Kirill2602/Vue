import { mount } from '@vue/test-utils'
import App from "../../src/App"
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
    test('СЛОЖЕНИЕ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('2')
        const btn = wrapper.find('button[name="+"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')
        expect(wrapper.vm.result).toBe(4)
    })
    test('ВЫЧИТАНИЕ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('3')
        const btn = wrapper.find('button[name="-"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')
        expect(wrapper.vm.result).toBe(-1)
    })
    test('УМНОЖЕНИЕ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('2')
        const btn = wrapper.find('button[name="*"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')
        expect(wrapper.vm.result).toBe(4)
    })
    test('ДЕЛЕНИЕ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('2')
        const btn = wrapper.find('button[name="/"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')// Жмяк на +
        expect(wrapper.vm.result).toBe(1)
    })
    test('ВОЗВЕДЕНИЕ В СТЕПЕНЬ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('2')
        const btn = wrapper.find('button[name="Возведение в степень"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')
        expect(wrapper.vm.result).toBe(4)
    })
    test('ЦЕЛОЧИСЛЕННОЕ ДЕЛЕНИЕ', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id = radio2]')
        const operand2Input = wrapper.find('input[name=operand2]')
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        await radio2.setChecked()
        await operand2Input.setValue('2')
        const btn = wrapper.find('button[name="Целочисленное деление"]')
        expect(wrapper.text()).toContain('Результат:')
        await btn.trigger('click')
        expect(wrapper.vm.result).toBe(1)
    })
    test('Кнопка удаления символа операнд1', async () => {
        const wrapper = mount(calc)
        const operand1Input = wrapper.find('input[name=operand1]')
        const deleteBtn = wrapper.find('button[name=←]')
        operand1Input.setValue('22')
        expect(wrapper.vm.operand1).toBe(22)
        await deleteBtn.trigger('click')
        expect(wrapper.vm.operand1).toBe('2')
    })
    test('Кнопка удаления символа операнд2', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id=radio2]')
        await radio2.setChecked()
        const operand2Input = wrapper.find('input[name=operand2]')
        const deleteBtn = wrapper.find('button[name=←]')
        operand2Input.setValue('100')
        expect(wrapper.vm.operand2).toBe(100)
        await deleteBtn.trigger('click')
        expect(wrapper.vm.operand2).toBe('10')
    })
    test('Показать/скрыть экранную клавиатуру через чекбокс', async () => {
        const wrapper = mount(calc)
        const checkbox = wrapper.find('input[id=check]')
        await checkbox.trigger('click')
        expect(wrapper.find('.keyboard').isVisible()).toBe(false)
        await checkbox.trigger('click')
        expect(wrapper.find('.keyboard').isVisible()).toBe(true)
    })
    test('Экранная клавиатура', async () => {
        const wrapper = mount(calc)
        const btn = wrapper.find('button[name="1"]')
        await btn.trigger('click')
        expect(wrapper.vm.operand1).toBe('1')
        await btn.trigger('click')
        expect(wrapper.vm.operand1).toBe('11')
    })
    test('Сложение после ввода с экранной клавиатуры', async () => {
        const wrapper = mount(calc)
        const radio2 = wrapper.find('input[id="radio2"]')
        const btn = wrapper.find('button[name="1"]')
        const btn2 = wrapper.find('button[name="2"]')
        const plus = wrapper.find('button[name="+"]')
        await btn.trigger('click')
        expect(wrapper.vm.operand1).toBe('1')
        await btn.trigger('click')
        expect(wrapper.vm.operand1).toBe('11')
        await radio2.setChecked()
        await btn2.trigger('click')
        expect(wrapper.vm.operand2).toBe('2')
        await plus.trigger('click')
        expect(wrapper.vm.result).toBe(13)
    })
})
