import * as ko from 'knockout';
import * as $ from 'jquery';
import 'bootstrap';

$(function (){
    let vm = new HomeIndex();
    ko.applyBindings(vm);
})

class HomeIndex {
    header: KnockoutObservable<string>;

    constructor() {
        this.header = ko.observable('Getting started');
    }

    ChangeHeader_Click = () => {
        this.header('Hello World!');
    }
}