var THREEx = THREEx || {}

THREEx.App = function(){
	this.signals = {
		update : new Signals.Signal(),
		enemyKilled : new Signals.Signal(),
	}
}
