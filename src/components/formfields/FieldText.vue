<template>
  <div>

    <div :class="['group', {'relative': type === 'list'}]">      
      <input 
        :class="{'list-related': type === 'list', 'invalid': isDirty && !currIsValid}"
        :type="type"
        v-model="currValue"
        @change="onFieldChange"
        @focus="isFocused = true"
        :required="type !== 'date'"
      >
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>

      <div v-if="type === 'list'" v-show="isFocused" :id="name" class="options">
        <div
          class="list-related list-item"
          v-for="item of filteredItems"
          :key="item.id"
          @click="selectItem(item[dataField])"
        >
        {{ item[dataField] }}
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import FieldMixin from './FieldMixin';

export default {
  name: 'FieldText',
  mixins: [FieldMixin]
};
</script>

<style scoped>
.relative {
  position: relative;
}

.options {
  position: absolute;
  left: 350px;
  top: -10px;
  z-index: 1;
  background-color:whitesmoke;
  padding: 30px 50px;
  border-radius: 20px;
}

.options div {
  padding: 2px 0;
  font-weight: 400;
}

.options div:hover {
  font-weight: 700;
  cursor: pointer;
  color: darkslateblue;
}

.invalid {
  border-color: red;
  background-color: lightpink;
}

.group { 
  position:relative; 
  margin-bottom:45px; 
}

input {
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}

input:focus { outline:none; }

label {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

input:focus ~ label, input:valid ~ label {
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

.bar { position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
</style>