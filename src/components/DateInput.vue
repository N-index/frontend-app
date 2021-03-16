<template>
  <input
    type="date"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "DateInput",
  props:['modelValue']
};
</script>
