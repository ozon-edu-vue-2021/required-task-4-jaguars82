<template>
  <div>
    <component
      :is="fieldComponent"
      :name="fieldinfo.name"
      :label="fieldinfo.label"
      :type="fieldinfo.type"
      :value="fieldinfo.value"
      :isValid="fieldinfo.isValid"
      :avableIf="fieldinfo.avableIf"
      :validationRule="fieldinfo.validationRule ? fieldinfo.validationRule : false"
      :items="fieldinfo.items ? fieldinfo.items : false"
      :dataField="fieldinfo.dataField ? fieldinfo.dataField : false"
      @fieldchange="$emit('fieldchange', $event)"
    />
  </div>
</template>

<script>
export default {
  name: "FieldBase",
  props: {
    fieldinfo: {
      type: Object,
    }
  },
  components: {
    FieldText: () => import('./FieldText'),
    FieldSwitch: () => import('./FieldSwitch.vue'),
  },
  computed: {
    fieldComponent() {
      /**
       * Объект, описывающий, какой компонент следует использовать
       * исходя из типа поля
       */
      const fieldsMap = {
        text: 'FieldText',
        date: 'FieldText',
        email: 'FieldText',
        list: 'FieldText',
        switch: 'FieldSwitch'
      };
      return fieldsMap[this.fieldinfo.type];
    }
  }
};
</script>