<template>
    <button :class="nodataCSS">{{ content }}</button>
</template>
<script>
export default {
    props: {
        content: {
            type: String,
            required: true,
            default: "Submit"
        },
        nodataCSS: {
            type: String,
            required: true,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 100%;
    height: 100%;
    padding: 4px 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    background-color: dodgerblue;
    color: aliceblue;
    cursor: pointer;

    &:hover {
        background-color: rgb(80, 164, 248);
    }

}
.button-disabled {
    background-color: #999;

    &:hover {
        background-color: #999;
    }
}
</style>