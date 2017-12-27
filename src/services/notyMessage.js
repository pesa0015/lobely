import Noty from 'noty'
import 'noty/lib/noty.css'

export default function notyMessage(text, messageType, position) {
    let type   = messageType || 'success';
    let layout = position || 'centerRight';
    return new Noty({
        type: type,
        layout: layout,
        text: text
    }).show();
}
