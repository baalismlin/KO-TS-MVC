import { BaseViewModel } from "../BaseViewModel";
import {IPerson } from "../../Models/Person";
import * as $ from "jquery";
import * as ko from "knockout";
$(function () {
    let vm = new HomeAbout();
    ko.applyBindings(vm);
})

class HomeAbout extends BaseViewModel {
    man: KnockoutObservable<IPerson>;

    constructor() {
        super();

        this.man = ko.observable(null);
        this.man({
            name: "JOJO",
            age: 109,
            died: false
        });
    }

    Intro = (): string => {
        const {name, age, died } = this.man();
        return `${name} is ${age} years old.${died ? "He is died." : "He is not died."}`;
    }

}