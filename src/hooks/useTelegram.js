const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisibler) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        onToggleButton
    }
}