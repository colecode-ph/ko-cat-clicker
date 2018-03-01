var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.nicknames = ko.observable(['idiot', 'stupid', 'stinky', 'shithead']);
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
};

var ViewModel = function () {
    // var self = this;
    // 'this refers to the ViewModel binding context'

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        // 'this' refers to the currentCat binding context
        // because of the with: currentCat binding on the div element
        // which I don't understand because I thought $parent escaped that context

        // another way to do this using the self varible
        // self.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());