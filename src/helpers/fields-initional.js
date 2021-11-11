import citizenships from '@/assets/data/citizenships.json';
import passportTypes from '@/assets/data/passport-types.json';
import { cyrillic, latin, ruslat, email, date, paspSeries, paspNo, todayOrLater } from '@/helpers/validation-rules';

/**
 * Описание полей формы.
 * По этому описанию будет генерироваться форма.
 */
export default {
  firstNameRu: {
    name: 'firstNameRu',
    label: 'Имя',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [cyrillic],
    avableIf: true
  },
  firstNameEn: {
    name: 'firstNameEn',
    label: 'Имя (латиница)',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [latin],
    avableIf: false
  },
  middleNameRu: {
    name: 'middleNameRu',
    label: 'Отчество',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [cyrillic],
    avableIf: true
  },
  lastNameRu: {
    name: 'lastNameRu',
    label: 'Фамилия',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [cyrillic],
    avableIf: true
  },
  lastNameEn: {
    name: 'lastNameEn',
    label: 'Фамилия (латиница)',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [latin],
    avableIf: false
  },
  birthday: {
    name: 'birthday',
    label: 'Дата рождения',
    type: 'date',
    value: null,
    isValid: false,
    validationRule: [date, todayOrLater],
    avableIf: true
  },
  email: {
    name: 'email',
    label: 'Email',
    value: null,
    type: 'text',
    isValid: false,
    validationRule: [email],
    avableIf: true
  },
  gender: {
    name: 'gender',
    label: 'Пол',
    type: 'switch',
    value: 'мужской',
    isValid: true,
    items: [
      {
        id: '1',
        value: 'мужской'
      },
      {
        id: '2',
        value: 'женский'
      },
    ],
    avableIf: true
  },
  citizenship: {
    name: 'citizenship',
    label: 'Гражданство',
    type: 'list',
    value: 'Russia',
    isValid: true,
    validationRule: [ruslat],
    items: citizenships,
    dataField: 'nationality',
    avableIf: true
  },
  passportSeries: {
    name: 'passportSeries',
    label: 'Серия паспорта',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [paspSeries],
    avableIf: true
  },
  passportNoRu: {
    name: 'passportNoRu',
    label: '№ паспорта',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [paspNo],
    avableIf: true
  },
  passportNoEn: {
    name: 'passportNoRu',
    label: 'Паспорт',
    type: 'text',
    value: null,
    isValid: true,
    validationRule: false,
    avableIf: false
  },
  passportDate: {
    name: 'passportDate',
    label: 'Дата выдачи',
    type: 'date',
    value: null,
    isValid: false,
    validationRule: [date, todayOrLater],
    avableIf: true
  },
  passportOf: {
    name: 'passportOf',
    label: 'Место выдачи',
    type: 'list',
    value: null,
    isValid: false,
    validationRule: [ruslat],
    items: citizenships,
    dataField: 'capital',
    avableIf: false
  },
  passportType: {
    name: 'passportType',
    label: 'Тип паспорта',
    type: 'list',
    value: null,
    isValid: false,
    validationRule: [ruslat],
    items: passportTypes,
    dataField: 'type',
    avableIf: false
  },
  nameHasChanged: {
    name: 'nameHasChanged',
    label: 'Меняли ли фамилию или имя?',
    type: 'switch',
    value: 'нет',
    isValid: true,
    items: [
      {
        id: '1',
        value: 'да'
      },
      {
        id: '2',
        value: 'нет'
      },
    ],
    avableIf: true
  },
  prevFirstName: {
    name: 'prevFirstName',
    label: 'Прежнее имя',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [ruslat],
    avableIf: false
  },
  prevLastName: {
    name: 'prevLastName',
    label: 'Прежняя фамилия',
    type: 'text',
    value: null,
    isValid: false,
    validationRule: [ruslat],
    avableIf: false
  },
}