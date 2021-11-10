<template>
  <div class="wrapper">
    <p>{{ label }}</p>


    <span v-for="item in items" :key="item.id">

      <label :for="`${name}-${item.id}`" class="l-radio">
        <input
          type="radio"
          :id="`${name}-${item.id}`"
          :name="name"
          :value="item.value"
          v-model="currValue"
          @change="onFieldChange"
        >
        <span>{{ item.value }}</span>
      </label>

    </span>
  </div>
</template>

<script>
import FieldMixin from './FieldMixin';

export default {
  name: 'FieldSwitch',
  mixins: [FieldMixin]
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 50px;
}

p {
  margin: 0;
  font-size: 14px;
  color: #5264AE;
  font-weight: normal;
}

.l-radio {
  padding: 6px;
  border-radius: 50px;
  display: inline-flex;
  cursor: pointer;
  transition: background 0.2s ease;
  margin: 8px 0;
  -webkit-tap-highlight-color: transparent;
}
.l-radio:hover, .l-radio:focus-within {
  background: rgba(159, 159, 159, 0.1);
}
.l-radio input {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: none;
  border: 0;
  box-shadow: inset 0 0 0 1px #9F9F9F;
  box-shadow: inset 0 0 0 1.5px #9F9F9F;
  appearance: none;
  padding: 0;
  margin: 0;
  transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
  pointer-events: none;
}
.l-radio input:focus {
  outline: none;
}
.l-radio input:checked {
  box-shadow: inset 0 0 0 6px #6743ee;
}
.l-radio span {
  vertical-align: middle;
  display: inline-block;
  line-height: 20px;
  padding: 0 8px;
}
</style>