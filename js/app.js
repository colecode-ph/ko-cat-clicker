var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.nicknames = ko.observable([
        {nickname:'idiot'},
        {nickname: 'stinky'},
        {nickname: 'stupid'},
        {nickname: 'smelly'}
        ]);
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('WTF?');
    this.level = ko.computed( function() {
        if (this.clickCount() >= 3) {
            return "Toddler";
        } else {
            return "Baby";
        }
    }, this);
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };


}

ko.applyBindings(new ViewModel());