import $ from 'jquery';

export class BaseElement {
    
    constructor() {
        this.element = null; //jquery object
    }
    
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }
    
    getElementString() {
    throw 'please over-ride';
    }

    enableJS() {
    componentHandler.upgradeElement(this.element[0]);
    }

}