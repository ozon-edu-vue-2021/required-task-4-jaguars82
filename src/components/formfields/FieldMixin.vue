<script>
import { validate } from '@/helpers/validation-rules';
import { debounce } from '@/helpers/optimizations'

export default {
  props: {
    name: { type: String },
    label: { type: String },
    type: { type: String },
    value: { type: String },
    validationRule: { type: [Array, Boolean] },
    isValid: { type: Boolean, default: false },
    avableIf: { type: Boolean },
    items: { type: [Array, Boolean] },
    dataField: { type: [String, Boolean] }
  },
  data () {
    return { 
      isFocused: false,
      isDirty: false,
      currValue: this.value,
      currIsValid: this.isValid,
      filteredItems: this.items
    };
  },
  methods: {
    onFieldChange() {
      this.isDirty = true;
      this.validationRule ? this.validateField() : this.currIsValid = true;
      this.$emit('fieldchange', { field: this.name, newVal: this.currValue, isValid: this.currIsValid });
    },
    validateField() {
      this.currIsValid = validate(this.currValue, this.validationRule);
    },
    filterItems() {
      const filtItems = this.items.filter((item) => { 
        return item[this.dataField].includes(this.currValue);
      });
      this.filteredItems = filtItems;
    },
    selectItem(item) {
      this.currValue = item;
      this.isFocused = false;
      this.onFieldChange();
    },
    outerClickListener(event) {
      if (this.isFocused && !event.target.closest('.list-related')) {
        this.isFocused = false;
      }
    }  
  },
  watch: {
    currValue() {
      if (this.type === 'list') {
        const debouncedFilterItems = debounce(this.filterItems, 1000);
        debouncedFilterItems();
      }
    }
  },
  mounted() {
    if (this.type === 'list') {
      document.addEventListener("click", this.outerClickListener);
    }
  },
  beforeDestroy() {
    if (this.type === 'list') {
      document.removeEventListener("click", this.outerClickListener);
    }
  }
};
</script>

<style scoped>
.list-item {
  cursor: pointer;
}
</style>