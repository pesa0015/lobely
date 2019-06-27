import Noty from 'noty'
import 'noty/lib/noty.css'
import check from './../assets/img/check.png'

export default function notyMessage(text, messageType, position) {
    let type   = messageType || 'success';
    let layout = position || 'centerRight';
    return new Noty({
        type: type,
        layout: layout,
        text: text,
        callbacks: {
            onTemplate: function() {
                this.barDom.innerHTML = '<div class="noty_body">' + this.options.text + '<div>';
                if (type === 'success') {
                    this.barDom.innerHTML += '<img src="' + check + '"/>';
                }
            }
        }
    }).show();
}
