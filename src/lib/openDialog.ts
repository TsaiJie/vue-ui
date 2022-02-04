import { createApp, h as creatElement } from 'vue';
import Dialog from '@/lib/Dialog.vue';
interface DialogProps {
    title: string | object;
    content: string | object;
    ok?: () => boolean;
    cancel?: () => boolean;
    closeOnClickOverlay?: boolean;
}
export default (props: DialogProps) => {
    const { title, content, ok, cancel, closeOnClickOverlay } = props;
    const divEl = document.createElement('div');
    document.body.appendChild(divEl);
    const handleClose = () => {
        app.unmount();
        divEl.remove();
    };
    const app = createApp({
        render() {
            return creatElement(
                Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newValue: boolean) => {
                        if (!newValue) {
                            handleClose();
                        }
                    },
                    closeOnClickOverlay,
                    ok,
                    cancel,
                },
                {
                    title: () => title,
                    content: () => content,
                }
            );
        },
    });
    app.mount(divEl);
};
