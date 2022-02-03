<script lang="ts" setup>
import Button from './Button.vue';
import { toRefs } from 'vue';
interface DialogProps {
    visible: boolean;
    closeOnClickOverlay?: boolean;
    ok?: () => boolean;
    cancel?: () => boolean;
}
const props = withDefaults(defineProps<DialogProps>(), {
    visible: false,
    closeOnClickOverlay: false,
});
const { visible, closeOnClickOverlay } = toRefs(props);
const emits = defineEmits(['update:visible']);
const handleClose = () => {
    emits('update:visible', !visible.value);
};
const handleCloseOnClickOverlay = () => {
    closeOnClickOverlay.value && handleClose();
};
const handleCancel = () => {
    // props.cancel && props.cancel() && handleClose();
    props.cancel?.() && handleClose();
};
const handleOk = () => {
    // props.ok && props.ok() && handleClose();
    props.ok?.() && handleClose();
};
</script>

<template>
<teleport to="body">
	<template v-if="visible">
		<div
			class="tsai-dialog-overlay"
			@click="handleCloseOnClickOverlay"
		></div>
		<div class="tsai-dialog-wrapper">
			<div class="tsai-dialog">
				<header>
					<slot name="title">默认标题</slot>
					<span
						class="tsai-dialog-close"
						@click="handleClose"
					></span>
				</header>
				<main>
					<slot name="content"> 默认内容 </slot>
				</main>
				<footer>
					<Button level="primary" @click="handleOk">OK</Button>
					<Button @click="handleCancel">Cancel</Button>
				</footer>
			</div>
		</div>
	</template>
</teleport>
</template>

<style lang="less" scoped>
@radius: 4px;
@border-color: #d9d9d9;
.tsai-dialog {
    background-color: white;
    border-radius: @radius;
    box-shadow: 0 0 3px fadeout(black, 50%);
    min-width: 15em;
    max-width: 90%;
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fadeout(black, 50%);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    > header {
        padding: 12px 16px;
        border-bottom: 1px solid @border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    > main {
        padding: 12px 16px;
    }
    > footer {
        border-top: 1px solid @border-color;
        padding: 12px 16px;
        text-align: right;
    }
    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background-color: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>