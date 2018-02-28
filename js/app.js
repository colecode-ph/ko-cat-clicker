var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.nicknames = ko.observable(['idiot', 'stupid', 'stinky', 'shithead']);
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
};

var ViewModel = function () {
    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());