<template>
  <div class="form-wrapper">
    <form @submit.prevent="sendForm">
      <div v-for="field in fields" :key="field.name">
        <Field v-if="field.avableIf" :fieldinfo="field" @fieldchange="dataRenew"/>
      </div>

      <div v-if="isFormValid" id="button-container">
        <button class="send-data" type="submit">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Отправить</span>
        </button>
      </div>

    </form>
  </div>
</template>

<script>
import Field from './formfields/Field.vue';
import fieldsInitional from '@/helpers/fields-initional';

export default {
  components: {
    Field
  },
  data() {
    return {
      fields: fieldsInitional,
      isFormValid: false
    };
  },
  watch: {
    isRussia() {
      this.onSwitchCitizenship();
    },
    isNameChanged() {
      this.switchNameExtraFields();
    }
  },
  computed: {
    isRussia() {
      return this.fields.citizenship.value === 'Russia';
    },
    isNameChanged() {
      return this.fields.nameHasChanged.value === 'да';
    }
  },
  methods: {
    sendForm() {
      const data = [];
      Object.keys(this.fields).forEach(field => {
        if (this.fields[field].avableIf && this.fields[field].isValid) {
          const elem = new Object();
          elem[field] = this.fields[field].value;
          data.push(elem);
        }
      });
      console.log(data);
    },
    validateForm() {
      let validationStatus = true;
      Object.keys(this.fields).forEach(field => {
        if (this.fields[field].avableIf && !this.fields[field].isValid) {
          validationStatus = false;
        }
      });
      this.isFormValid = validationStatus;
    },
    dataRenew(data) {
      this.fields[data.field].value = data.newVal;
      this.fields[data.field].isValid = data.isValid;
      this.validateForm();
    },
    onSwitchCitizenship() {
      /**
       * Объект, описывающий уникальные поля для "россиян" и "иностранцев"
       * Под "уникальными" имею в виду поля, доступные только какой-то одной категории пользователей
       */
      const fieldsMap = {
        russian: ['firstNameRu', 'middleNameRu', 'lastNameRu', 'passportSeries', 'passportNoRu', 'passportDate'],
        foreign: ['firstNameEn', 'lastNameEn', 'passportNoEn', 'passportOf', 'passportType']
      };

      /**
       * Переключаем уникальные поля формы
       * в зависимости от указанного гражданства
       */
      if (this.isRussia) {
        fieldsMap.russian.forEach(field => {
          this.fields[field].avableIf = true;
        });
        fieldsMap.foreign.forEach(field => {
          this.fields[field].avableIf = false;
        });
      } else {
        fieldsMap.russian.forEach(field => {
          this.fields[field].avableIf = false;
        });
        fieldsMap.foreign.forEach(field => {
          this.fields[field].avableIf = true;
        });
      }
    },
    switchNameExtraFields() {
      const extraFields = ['prevFirstName', 'prevLastName'];

      if(this.isNameChanged) {
        extraFields.forEach(field => {
          this.fields[field].avableIf = true;
        });
      } else {
        extraFields.forEach(field => {
          this.fields[field].avableIf = false;
        });
      }
    }
  },
};
</script>

<style scoped>
.form-wrapper {
  padding-bottom: 50px;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

button.send-data {
  width: 12rem;
  height: auto;
}

button.send-data .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: darkslateblue;
  border-radius: 1.625rem;
}

button.send-data .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.send-data .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.send-data .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.send-data .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
}
</style>
