<template>
    <div class="detail">
        <div class="detail-container">
            <h2> Event Details</h2>
            <p>Name: </p>
            <p>Notified Date/Time</p>
            <p>Present Value</p>
            <p>Present Status</p>
            <p>Previous State</p>
            <p>Conf Y/N</p>
            <p>Note</p>
        </div>
        <div class="detail-btn">
            <button>OK</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.detail {
    padding: 20px;
    position: relative;
    height: 100%;

    &-container {
        padding: 10px;

        h2 {
            text-align: center;
        }
    }

    &-btn {
        width: 90%;
        position: absolute;
        bottom: 0;

        button {
            width: 100%;
            padding: 4px 12px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            background-color: dodgerblue;
            cursor: pointer;

            &:hover {
                background-color: rgb(80, 164, 248);
            }
        }
    }
}
</style>