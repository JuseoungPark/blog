<template>
    <div class="select">
        <select
            :value="value"
            @change="onChange($event.target.value)"
        >
            <option
                v-for="item, idx in items"
                :key="idx"
                :value="item.label"
            >
                {{item.value}}{{unit}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        onChange: function(value) {
            if (value === '') {
                value = null;
            }
            this.$emit('input', value);
        }
    },
    props: ['items', 'value', 'unit']
}
</script>