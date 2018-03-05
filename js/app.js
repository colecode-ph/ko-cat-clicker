var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        nicknames: ['idiot', 'stupid', 'stinky', 'shithead'],
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    },
    {
        clickCount: 0,
        name: 'Stupid',
        nicknames: ['idiot', 'stupid', 'stinky', 'shit-for-brains'],
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    },

];


var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.nicknames = ko.observable(data.nicknames);
    this.imgSrc = ko.observable(data.imgSrc);
};

var ViewModel = function () {
    var self = this;
    // 'this refers to the ViewModel binding context'

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function () {
        // this.clickCount(this.clickCount() + 1);
        // 'this' refers to the currentCat binding context
        // because of the with: currentCat binding on the div element
        // which I don't understand because I thought $parent escaped that context

        // another way to do this using the self varible at the top of the function
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());