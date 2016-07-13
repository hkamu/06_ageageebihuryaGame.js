var gameoverlayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("GAME OVER", "Arial", 50);
        label.setPosition(size.width / 2, size.height * 4 / 5);
        this.addChild(label, 4);
        return true;
      }
});

var gameover = cc.Scene.extend({
    onEnter: function() {
        this._super();
        //ラベルとタップイベント取得
        var layer = new gameoverlayer();
        this.addChild(layer);
    }
});
