//2
//You and a friend were super bored and wanted to make a Russian Doll emulator:
//When someone click's the button next to the doll saying value: the doll spins
//around and shows a value. When someone click's on the doll itself.
//It opens up and if there is another doll inside, that doll will show up,
//otherwise a flag pops up saying: no more dolls! As doll administrators,
//you want to be able to add a new doll to the outer shell...
//Implement the back end code for your Russian Doll emulator.
//(feel free to implement it into a webpage if you want!)

var RussianDoll = function (value) {
    var self = this;

    var _doll = null;
    var _value = value;

    self.saying = function () {
        console.log('saying', _value);
    };

    self.openUp = function () {
        if (_doll !== null) {
            return _doll;
        } else {
            console.log('no more doll!');
        }
    };

    self.addDoll = function (doll) {
        if (self === doll) {
            console.log('can not add add doll into same doll');
        } else {
            _doll = doll;
        }
    };
};

//doll_1 = new RussianDoll("doll_1");
//doll_1.saying();
//doll_2 = new RussianDoll("doll_2");
//doll_1.addDoll(doll_2);
//doll_1.openUp().saying();

