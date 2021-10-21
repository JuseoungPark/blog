<template>
    <div class="text-field__wrap">
        <template v-if="label">
            <label for="label" class="label">{{ label }}</label>
            <slot></slot>
        </template>
        <input
            type="text"
            id="label"
            class="text-field"
            :class="[
                {'text-field--line' : border},
                {'text-field--title' : title},
            ]"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'TextInput-Component',
    props: {
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '입력해주세요.',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        // style
        border: {
            type: Boolean,
            default: false,
        },
        title: {
            type: Boolean,
            default: false,
        },
    },
    // props: ['label', 'placeholder', 'modelValue', 'border', 'title'],
    methods: {
        updateDate($event) {
            this.$emit('update:this.modelValue', $event.target.value)
        }
    },
}
</script>

<style scoped>
.text-field__wrap {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
}
.text-field__wrap .label {
    margin-bottom: 4px;
    text-align: left;
    font-size: 16px;
}
.text-field {
    min-height: 32px;
}
.text-field::placeholder {
    color: #bebebe;
}
.text-field--title {
    min-height: 66px;
    font-size: 20px;
}
.text-field--line {
    border-width: 1px;
    border-style: solid;
    border-color: #bebebe;
}
</style>